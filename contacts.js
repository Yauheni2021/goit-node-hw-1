const fs = require("fs/promises");
const path = require("path")

const contactsPath = path.join(__dirname, "contacts.json")

const contactsList = async () => {
    const result = await fs.readFile(contactsPath, "utf-8");

    return JSON.parse(result);
}

const getContactById

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
    contactsList,
}