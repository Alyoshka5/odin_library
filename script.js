let myLibrary = [];

// FILL TABLE

const table = document.querySelector('table tbody');

function displayBooks() {
    table.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        table.innerHTML += `
        <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read ? "yes" : "no"}</td>
        <td><button data-index="${book.index}" class="read-status-button">👁</button></td>
        <td><button data-index="${book.index}" class="delete-book-button">🗑️</button></td>
        </tr>
        `;
    }       
}


// CREATE BOOKS
let bookCounter = 0;
let deleteButtons;
let readStatusButtons;

function updateButtons() {
    displayBooks();
    deleteButtons = document.querySelectorAll('.delete-book-button');
    deleteButtons.forEach(button => button.addEventListener('click', deleteBook));
    readStatusButtons = document.querySelectorAll('.read-status-button');
    readStatusButtons.forEach(button => button.addEventListener('click', changeReadStatus));
}

class Book {
    constructor(title, author, pages, read, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }
}

function addBookToLibrary(bookInfo) {
    let title = bookInfo[0];
    let author = bookInfo[1];
    let pages = bookInfo[2];
    let read = bookInfo[3] ? true : false;
    let index = bookCounter++;
    let book = new Book(title, author, pages, read, index);
    myLibrary.push(book);
    updateButtons();
}

addBookToLibrary(["Percy Jackson", "person", 232, false]);
addBookToLibrary(["Harry Potter", "human", 324, true]);
addBookToLibrary(["Hunger Games", "Jordan", 542, true]);
updateButtons();

// BOOK FORM

const bookButton = document.querySelector('#new-book-button');
const bookForm = document.querySelector('.book-form');
const bookInputs = document.querySelectorAll('.book-input');

function getBookInfo(e) {
    e.preventDefault();
    let info = [];
    bookInputs.forEach(input => {
        info.push(input.value);
        input.value = '';
    });
    addBookToLibrary(info);
    bookForm.classList.add('hidden');
}

bookButton.addEventListener('click', () => {
    bookForm.classList.toggle('hidden');

});
bookForm.addEventListener('submit', getBookInfo);


// DELETE BOOK

function deleteBook() {
    let book = myLibrary.find(b => b.index == this.getAttribute('data-index'));
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    updateButtons();
}


// CHANGE READ BOOK STATUS

function changeReadStatus() {
    let book = myLibrary.find(b => b.index == this.getAttribute('data-index'));
    book.read = !book.read;
    updateButtons();
}