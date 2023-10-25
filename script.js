const myLibrary = [];

// cache form inputs
const form = document.querySelector('form');
const title = form.querySelector('#title');
const author = form.querySelector('#author');
const pages = form.querySelector('#pages');
const read = form.querySelector('#read');

// add event listeners
form.addEventListener('submit', submitBook);
[title, author, pages].forEach(el => el.addEventListener('input', checkInput));
// form.addEventListener('submit', checkSubmission);

// function checkSubmission(e) {
//   // if field is invalid, don't let form submit
//   e.preventDefault();
//   const formData = new FormData(this);
//   console.log(formData);
// }

enableModalDialog();

// Book class
class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

addBookToLibrary('Brave New World', 'Aldous Huxley', 288);
// addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 840);
// addBookToLibrary('Walden', 'Henry David Thoreau', 311);
// addBookToLibrary('The Eye of the World', 'Robert Jordan', 812, true);
displayLibrary(myLibrary);

// create new Book object instance and add to myLibrary
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read); 
  myLibrary.push(newBook);
}

// iterate over Book instances in library and display them
function displayLibrary(library) {
  library.forEach((book, i) => displayBook(book, i));
}

// display Book instance as card on screen
function displayBook(book, index) {
  // create title, author, pages, and buttons elements; add classes
  const title = document.createElement('h3');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = book.author;

  const pages = document.createElement('p');
  pages.textContent = `${book.pages} pages`;
  
  const read = document.createElement('button');
  if (book.read) {
    read.textContent = 'Read';
    read.classList.add('read-btn');
  } else {
    read.textContent = 'Not read';
  }
  // add click event listener to toggle book as 'Read' or 'Not read'
  read.addEventListener('click', toggleRead);

  const remove = document.createElement('button');
  remove.textContent = 'Remove';
  remove.classList.add('remove-btn');
  // add click event listener to remove button that enables removal of book
  remove.addEventListener('click', removeCard);

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  [read, remove].forEach(el => buttons.appendChild(el));
  
  // create a new card, add content
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = index;
  [title, author, pages, buttons].forEach(el => card.appendChild(el));

  // add card to main-content
  const main = document.querySelector('.main-content');
  main.appendChild(card);

  function removeCard() {
    // delete book instance from myLibrary array
    myLibrary.splice(card.dataset.index, 1);
    card.remove();

    // renumber card indices
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => card.dataset.index = i);
  }

  // change Book.read value and button text to opposite
  function toggleRead() {
    myLibrary[card.dataset.index].read = !myLibrary[card.dataset.index].read;
    read.textContent = book.read == true ? 'Read' : 'Not read';
    read.classList.toggle('read-btn');
  }
}

// enable buttons to open and close the modal dialog with form
function enableModalDialog() {
  const addBook = document.querySelector('.add-book');
  const dialog = document.querySelector('#dialog');
  addBook.addEventListener('click', () => dialog.showModal());

  const cancel = document.querySelector('#cancel');
  cancel.addEventListener('click', () => dialog.close());
}

// enable the submit button in the modal dialog to submit a new book
function submitBook() {
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  displayBook(myLibrary[myLibrary.length - 1], myLibrary.length - 1);
  form.reset();
}

function checkInput() {
  // if field input is valid, remove error message
  if (this.validity.valid) {
    this.nextElementSibling.textContent = ''; // reset content of message
  // if still an error, show error
  } else {
    showError(this);
  }
}

function showError(targetField) {
  const errorMessage = {
    title: "a book title",
    author: "an author",
    pages: "a number of pages"
  };
  
  // if field is empty, display error message
  if (targetField.validity.valueMissing) {
    targetField.nextElementSibling.textContent = `You must enter ${errorMessage[targetField.id]}.`;
  }

  // if page num field is less than min
  if (targetField.validity.rangeUnderflow) {
    targetField.nextElementSibling.textContent = `Number must be at least 1. You entered ${targetField.value}.`;
  }
}
