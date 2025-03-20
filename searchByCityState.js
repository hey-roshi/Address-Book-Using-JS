let addressBook = require('./addContacts');
function searchByCityOrState(addressBook, city, state) {
    return addressBook.filter(contact =>
        contact.city.toLowerCase() === city.toLowerCase() || contact.state.toLowerCase() === state.toLowerCase()
    );
}

// Example Usage
let foundPersons = searchByCityOrState(addressBook, "New York", "CA");
console.log("Persons in City/State:", foundPersons);
