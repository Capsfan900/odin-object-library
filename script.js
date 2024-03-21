const myLibrary = [];

function Book(title, author, numpages, isread) {
    this.author = author;
    this.title = title;
    this.numpages = numpages;
    this.isread = isread;
}

function addBookToLibrary(title, author, numpages, isread) {
    const bookItem = new Book(title, author, numpages, isread)
    myLibrary.push(book);
}

