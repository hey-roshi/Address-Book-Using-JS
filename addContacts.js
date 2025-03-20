const Contact = require('./AddressBookContact');
let addressBook = [];
function addContactToAddressBook(contact) {
    addressBook.push(contact);
}

// Example Usage
let contact1 = new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com");
addContactToAddressBook(contact1);
console.log(addressBook);
