const bookTitleInput = document.querySelector('input[name="book-title"]');
const bookAuthorInput = document.querySelector('input[name="book-author"]');
const bookPagesInput = document.querySelector('input[name="book-pages"]');
const bookTitleError = document.querySelector('.book-title-error');
const bookAuthorError = document.querySelector('.book-author-error');
const bookPagesError = document.querySelector('.book-pages-error');

function checkInputValidity(input, errorDiv, errorMesseageEnding) {
    if (input.validity.valueMissing) {
        errorDiv.textContent = `Please enter ${errorMesseageEnding}`;
    } else {
        errorDiv.textContent = "";
    }
}

function checkFormValidity() {
    checkInputValidity(bookTitleInput, bookTitleError, "a book title");
    checkInputValidity(bookAuthorInput, bookAuthorError, "the book author");
    checkInputValidity(bookPagesInput, bookPagesError, "the ammount of pages in the book");
}

bookTitleInput.addEventListener('input', () => { checkInputValidity(bookTitleInput, bookTitleError, "a book title") });
bookAuthorInput.addEventListener('input', () => { checkInputValidity(bookAuthorInput, bookAuthorError, "the book author") });
bookPagesInput.addEventListener('input', () => { checkInputValidity(bookPagesInput, bookPagesError, "the ammount of pages in the book") });

export default checkFormValidity;