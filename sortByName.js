let addressBook = require('./addContacts');
function sortByName(addressBook) {
    return addressBook.sort((a, b) => a.firstName.localeCompare(b.firstName));
}

// Example Usage
let sortedByName = sortByName(addressBook);
console.log("Sorted by Name:", sortedByName);
