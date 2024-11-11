const friends = ['Poly', 'Mango', 'Ajax', 'Kiwi'];
let string = '';
for (let i = 0; i < friends.length; i++) {
    string += friends[i] + ', ';
}
string = string.slice(0, -2);
console.log(string);
const stringJoin = friends.join(', ');
console.log(stringJoin);


const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

const cardToRemove = 'Карточка-3';
const indexToRemove = cards.indexOf(cardToRemove);
if (indexToRemove !== -1) {
    cards.splice(indexToRemove, 1);
}

const cardToInsert = 'Карточка-6';
const indexToInsert = 2;
cards.splice(indexToInsert, 0, cardToInsert); 

const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);
if (indexToUpdate !== -1) {
    cards[indexToUpdate] = 'Оновлена Карточка-4';
}
console.log(cards);
