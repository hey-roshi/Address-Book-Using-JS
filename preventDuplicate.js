function addContact(addressBook, newContact) {
    // Check for duplicate entries
    let isDuplicate = addressBook.some(contact =>
        contact.firstName.toLowerCase() === newContact.firstName.toLowerCase() &&
        contact.lastName.toLowerCase() === newContact.lastName.toLowerCase()
    );

    if (isDuplicate) {
        console.log("Duplicate Entry! Contact not added.");
    } else {
        addressBook.push(newContact);
        console.log("Contact added:", newContact);
    }
}

// Example Usage
let addressBook = [
    { firstName: "John", lastName: "Doe", city: "New York", state: "NY" }
];
let newContact = { firstName: "John", lastName: "Doe", city: "San Francisco", state: "CA" };

addContact(addressBook, newContact);
console.log("Address Book:", addressBook);
