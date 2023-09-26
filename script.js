const myLibrary = [];

enableModalDialog();
enableSubmitBook();

// Book constructor function
function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

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
  read.textContent = book.read == true ? 'Read' : 'Not read';
  // add click event listener to toggle book as 'Read' or 'Not read'
  read.addEventListener('click', toggleRead);

  const remove = document.createElement('button');
  remove.textContent = 'Remove';
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
  }
}

// enable buttons to open and close the modal dialog with form
function enableModalDialog() {
  const addBook = document.querySelector('.add-book');
  const dialog = document.querySelector('#dialog');
  addBook.addEventListener('click', () => {
    dialog.showModal();
    openCheck(dialog);
  });

  const cancel = document.querySelector('#cancel');
  cancel.addEventListener('click', () => {
    dialog.close();
    openCheck(dialog);
  });

  function openCheck(dialog) {
    if (dialog.open) {
      console.log("Dialog open");
    } else {
      console.log("Dialog closed");
    }
  }
}

// enable the submit button in the modal dialog to submit a new book
function enableSubmitBook() {
  // select form inputs
  const form = document.querySelector('form');
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');
  const submit = document.querySelector('#submit');
  
  // add click event listener to submit button
  submit.addEventListener('click', () => {
    console.log(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    displayBook(myLibrary[myLibrary.length - 1], myLibrary.length - 1);
    form.reset();
  });
}


addBookToLibrary('Brave New World', 'Aldous Huxley', 288, true);
addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 840);
addBookToLibrary('Walden', 'Henry David Thoreau', 311);
addBookToLibrary('The Eye of the World', 'Robert Jordan', 812, true);
// addBookToLibrary('Brave New World', 'Aldous Huxley', 288, true);
// addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 840);
// addBookToLibrary('Walden', 'Henry David Thoreau', 311);
// addBookToLibrary('The Eye of the World', 'Robert Jordan', 812, true);
// addBookToLibrary('Brave New World', 'Aldous Huxley', 288, true);
// addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 840);
// addBookToLibrary('Walden', 'Henry David Thoreau', 311);
// addBookToLibrary('The Eye of the World', 'Robert Jordan', 812, true);

console.log(myLibrary);

displayLibrary(myLibrary);

