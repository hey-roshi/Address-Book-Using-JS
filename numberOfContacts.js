let addressBook = require('./addContacts');
function getNumberOfContacts() {
    return addressBook.reduce((count, contact) => count + 1, 0);
}

// Example Usage
console.log("Number of Contacts:", getNumberOfContacts());
