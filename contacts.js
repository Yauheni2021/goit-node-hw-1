const fs = require("fs/promises");
const path = require("path")
const {nanoid} = require("nanoid")

const contactsPath = path.join(__dirname, "./db/contacts.json")

const contactsList = async () => {
    const result = await fs.readFile(contactsPath, "utf-8");

    return JSON.parse(result);
}

const getContactById = async (contactId) => {
    const contacts = await contactsList();
    const result = await contacts.find(contact => contact.id === contactId);

    return result || null;
};


const addContact = async (name, email, phone) => {
    const contacts = await contactsList();
    const newContact = {
        id: nanoid(3),
        name,
        email,
        phone,
    };
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return newContact;
};

const removeContact = async (contactId) => {
    const contacts = await contactsList();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) {
        return null;
    }

    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    
    return result;

}



module.exports = {
    contactsList,
    getContactById,
    addContact,
    removeContact,

}