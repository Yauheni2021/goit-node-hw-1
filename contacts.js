const fs = require("fs/promises");
const path = require("path")
const {nanoid} = require("nanoid")

const contactsPath = path.join(__dirname, "./db/contacts.json")

const contactsList = async () => {
    try {
        const result = await fs.readFile(contactsPath, "utf-8");

        return JSON.parse(result);
    } catch (error) {
        console.log(error.mesage);
    };
    
};

const getContactById = async (contactId) => {
    try {
        const contacts = await contactsList();
        const result = await contacts.find(contact => contact.id === contactId);

        return result || null;
    } catch (error) {
        console.log(error.mesage);
    }
};


const addContact = async (data) => {
    try {
        const contacts = await contactsList();
    const newContact = {
        id: nanoid(),
        ...data
    };
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return newContact;
    } catch (error) {
        console.log(error.mesage);
    }
};

const removeContact = async (contactId) => {
    try {
        const contacts = await contactsList();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) {
        return null;
    }

    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    
    return result;

    } catch (error) {
        console.log(error.mesage);
    }
}



module.exports = {
    contactsList,
    getContactById,
    addContact,
    removeContact,

}