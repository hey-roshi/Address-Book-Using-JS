let addressBook = require('./addContacts');
function deleteContactByName(name) {
    addressBook = addressBook.filter(contact => contact.firstName !== name && contact.lastName !== name);
}

// Example Usage
deleteContactByName("John");
console.log(addressBook);
