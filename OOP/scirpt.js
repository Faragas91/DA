let contacts = [
    new Contact('Jessica', 'Falte', '1816816161')
];



function addContact(firstName, lastName) {
    let myContact = new Contact(firstName, lastName);
    contacts.push(myContact);
}

addContact('John', 'Fusl', '1816816161')
addContact('Arsch', 'Fusl', '1816816161')
addContact('Thomas', 'Fusl', '1816816161')

