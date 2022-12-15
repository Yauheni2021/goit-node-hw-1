const fs = require("fs/promises");
const path = require("path")

const contactsPath = path.join(__dirname, "contacts.json")

const contactsList = async () => {
    const result = await fs.readFile(contactsPath, "utf-8");

    return JSON.parse(result);
}

const getContactById = async (contactId) => {
    const contacts = await contactsList();
    const result = await contacts.find(item => item.contactId === contactId);

    return result;
};


const addContact = async (name, email, phone) => {
    
}



module.exports = {
    contactsList,
    getContactById,
}