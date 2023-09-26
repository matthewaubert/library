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

function displayLibrary(myLibrary) {
  myLibrary.forEach(book => { // iterate over books in library
    // create title, author, pages, and buttons elements; add classes
    const title = document.createElement('h3');
    title.textContent = book.title;
    // title.classList.add('title');

    const author = document.createElement('p');
    author.textContent = book.author;
    // author.classList.add('author');

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    // pages.classList.add('pages');
    
    const read = document.createElement('button');
    read.textContent = book.read == true ? 'Read' : 'Not Read';
    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    [read, remove].forEach(el => buttons.appendChild(el));
    
    // create a new card
    const card = document.createElement('div');
    card.classList.add('card');
    [title, author, pages, buttons].forEach(el => card.appendChild(el));

    // add card to main-content
    const main = document.querySelector('.main-content');
    main.appendChild(card);
  });
}

function enableAddBook() {
  // add event listener to add button
  const addBook = document.querySelector('.add-book');
  const dialog = document.querySelector('#dialog');
  addBook.addEventListener('click', () => {
    dialog.showModal();
    openCheck(dialog);
  });

  const cancel = document.querySelector('#cancel');
  cancel.addEventListener('click', () => {
    // close modal
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


addBookToLibrary('Brave New World', 'Aldous Huxley', 288, true);
addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 840);
addBookToLibrary('Walden', 'Henry David Thoreau', 311);
addBookToLibrary('The Eye of the World', 'Robert Jordan', 812, true);
addBookToLibrary('Brave New World', 'Aldous Huxley', 288, true);
addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 840);
addBookToLibrary('Walden', 'Henry David Thoreau', 311);
addBookToLibrary('The Eye of the World', 'Robert Jordan', 812, true);
addBookToLibrary('Brave New World', 'Aldous Huxley', 288, true);
addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 840);
addBookToLibrary('Walden', 'Henry David Thoreau', 311);
addBookToLibrary('The Eye of the World', 'Robert Jordan', 812, true);

console.log(myLibrary);

displayLibrary(myLibrary);

enableAddBook();