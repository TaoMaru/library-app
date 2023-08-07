let bookCollection = [];

const booksPanel = document.querySelector('.books-panel');
const addBookBtn = document.querySelector('.add-book-btn');
const addBookForm = document.querySelector('.add-book-form');
const addBookSubmitBtn = document.querySelector('.submit');

function Book(title, author, numPages, haveRead) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.haveRead = haveRead
    this.info = function() {
        const readStatus = this.haveRead ? 'have read.' : 'have not read yet.';
        console.log(this.title + ' by ' + this.author +
                    ', ' + numPages + ' pages' + 
                    ', ' + readStatus);
    }
};

function addToCollection(book) {
    bookCollection.push(book);
};

function removeFromCollection(book) {
    if(bookCollection.length > 0) {
        for(let i = 0; i < bookCollection.length; i++) {
            if(book.title = bookCollection[i].title) {
                console.log('GOTTEM');
            }
        }
    }
};

let book1 = new Book('A Wonderful Age', 'Bernard Tressel', 455, false);
let book2 = new Book('Eleven Hands', 'Sarah Wylde', 123, false);
let book3 = new Book('The Hand of Nostradamus', 'Phillip Green', 730, false);
let book4 = new Book('Shocked Eyes', 'Heather Redding', 544, false);

bookCollection.push(book1);
bookCollection.push(book2);
bookCollection.push(book3);
bookCollection.push(book4);

for(let i = 0; i < bookCollection.length; i++){
    let newBookCard = document.createElement("div");
    newBookCard.className = "book-card";

    let bookCardTitle = document.createElement("p");
    bookCardTitle.className = "book-title";

    let bookCardAuthor = document.createElement("P");
    bookCardAuthor.className = "book-author";

    let removeBookBtn = document.createElement("img");
    removeBookBtn.className = "remove-book-icon";

    bookCardTitle.textContent = bookCollection[i].title;
    bookCardAuthor.textContent = bookCollection[i].author;
    
    newBookCard.appendChild(bookCardTitle);
    newBookCard.appendChild(bookCardAuthor);
    newBookCard.appendChild(removeBookBtn);
    booksPanel.appendChild(newBookCard);
};

function showAddBookForm() {
    addBookForm.classList.remove("add-book-hidden-form");
}

function hideAddBookForm() {
    addBookForm.classList.add("add-book-hidden-form");
}

addBookBtn.addEventListener('click', showAddBookForm);
addBookSubmitBtn.addEventListener('click', hideAddBookForm);
