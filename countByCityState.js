let addressBook = require('./addContacts');
function countByCityOrState(addressBook, groupBy) {
    let count = addressBook.reduce((acc, contact) => {
        let key = groupBy === "city" ? contact.city : contact.state;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    return count;
}

// Example Usage
let countByCity = countByCityOrState(addressBook, "city");
console.log("Count by City:", countByCity);

let countByState = countByCityOrState(addressBook, "state");
console.log("Count by State:", countByState);
