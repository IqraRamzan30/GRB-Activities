const bookTitles = [
"The Catcher in the Rye",
"To Kill a Mockingbird",
"1984",
"Moby Dick",
];

let char = "a";
console.log(char.charCodeAt(0));

//loop for book title array
const compareTitles = (books) => {
const orderedBooks = [];

for (title of books) {
let count = 0;
for (let i = 0; i < title.length; i++) {
count += title.charCodeAt(i);
}
orderedBooks.push(title);
orderedBooks.push(count);
}
// new array to be returned when books will be  ordered from the lowest ascii score to the highest
return orderedBooks;
};


console.log(compareTitles(bookTitles));
