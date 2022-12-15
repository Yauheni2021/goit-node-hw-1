const contacts = require("./contacts")


const invokeAction = async ({action, id}) => {
switch (action) {
    case "list":
        const data = await contacts.contactsList()
        console.log(data);
        break;
    
    case "getId":
        const oneContact = await contacts.getContactById(id)
        console.log(oneContact);
        break;

    default:
        break;
}
}

const nodemon = require("nodemon");


console.log("Welcome to node.js im here");