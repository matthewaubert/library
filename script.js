const myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295);

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read); // create new Book object instance
  myLibrary.push(newBook); // add Book instance to myLibrary
}

addBookToLibrary('Brave New World', 'Aldous Huxley', 288, true);
addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 840);
addBookToLibrary('Walden', 'Henry David Thoreau', 311);
addBookToLibrary('The Eye of the World', 'Robert Jordan', 812, true);

console.log(myLibrary);