const dialog = document.querySelector("dialog");
const showButton = document.getElementById("show");
const form = document.querySelector("form");
const submit = document.getElementById("addBook");



//global scope variables and shit
let myLibrary = [];


//constructor function
function Book(title, author, read, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};



const addBookToLibrary = (title, author, pages, read) => {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);

}

const removeBookFromLibrary = (title) => {
  const index = myLibrary.findIndex((book) => book.title === title);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
};

//these functions  above act on array of objects only nothing to do with DOM 

// Show book list
const displayBooks = () => {
  const booklist = document.querySelector('.book-container');
  booklist.textContent = "";

  myLibrary.forEach((book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`);
    // Card Element
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    // Book Elements
    const titleElement = document.createElement('h2');
    titleElement.textContent = book.title;
    titleElement.setAttribute('class', 'title');

    const authorElement = document.createElement('strong');
    authorElement.textContent = book.author;
    authorElement.setAttribute('class', 'author');

    const pagesElement = document.createElement('div');
    console.log("Pages:", book.pages);
    pagesElement.textContent = book.pages;
    pagesElement.setAttribute('class', 'pages');

    const readElement = document.createElement('div');
    readElement.textContent = book.read ? 'Already read' : 'Not read yet';
    readElement.setAttribute('class', 'read');

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.addEventListener('click', () => {
      removeBookFromLibrary(book.title);
      displayBooks(); // Refresh the list
    });

    // Append to card
    card.appendChild(deleteButton);
    card.appendChild(titleElement);
    card.appendChild(authorElement);
    card.appendChild(pagesElement);
    card.appendChild(readElement);


    // Append card to booklist
    booklist.appendChild(card);
    console.log(myLibrary);
  });
};


// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector('#bookTitle').value;
  const author = document.querySelector('#bookAuthor').value;
  const pages = document.querySelector("#bookPages").value;
  console.log("Pages input:", pages);
  const read = document.querySelector('#bookRead').checked;
  addBookToLibrary(title, author, pages, read);
  displayBooks();
  dialog.close();
  console.log('i work');

});

//toggle read status 









