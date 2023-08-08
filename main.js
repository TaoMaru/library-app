let bookCollection = [];

const booksPanel = document.querySelector('.books-panel');
const addBookBtn = document.querySelector('.add-book-btn');
const addBookForm = document.querySelector('.add-book-form');
const addBookSubmitBtn = document.querySelector('.submit');
const closeFormBtn = document.querySelector('.close-form-icon');

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

function removeBook(evt) {
    let parentElem = evt.target.parentElement;
    let bookIndex = parentElem.dataset.indexnumber;
    removeFromBookPanel(parentElem);
    assignIndexNumber();
    removeFromCollection(bookIndex);
};

function removeFromBookPanel(bookElem) {
    console.log(bookElem);
    booksPanel.removeChild(bookElem);
    let currBooks = document.querySelectorAll('.book-card');
    currBooks.forEach((book) => {
        console.log(book);
    });
};

function removeFromCollection(indexToRemove) {
    let newCollection = [];
    console.log(`index of removed book: ${indexToRemove}`);
    if(indexToRemove === 0){
        for(let i = 0; i < bookCollection.length; i++){
            console.log(bookCollection[i]);
            newCollection[i] = bookCollection[i];
            console.log(newCollection);
        };
    }else{
        for(let i = 0; i < indexToRemove; i++){
            console.log(bookCollection[i]);
            newCollection[i] = bookCollection[i];
            console.log(newCollection);
        };
        for(let i = indexToRemove + 1; i < bookCollection.length; i++){
            newCollection[i - 1] = bookCollection[i];
            console.log(bookCollection[i]);
        };
    };

    bookCollection.length = newCollection.length;
    console.log(`length of new array: ${bookCollection.length}`);
    for(let i = 0; i < bookCollection.length; i++){
        bookCollection[i] = newCollection[i];
    };
    console.log(bookCollection);
};

function assignIndexNumber() {
    let bookCards = document.querySelectorAll('.book-card');
    let newIndex = 0;
    bookCards.forEach((bookCard) => {
        bookCard.dataset.indexnumber = newIndex;
        newIndex += 1;
    });
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
    newBookCard.setAttribute("data-indexnumber", `${i}`);

    let bookCardTitle = document.createElement("p");
    bookCardTitle.className = "book-title";

    let bookCardAuthor = document.createElement("P");
    bookCardAuthor.className = "book-author";

    let removeBookBtn = document.createElement("img");
    removeBookBtn.className = "remove-book-icon";
    removeBookBtn.title = "Remove from library";
    removeBookBtn.addEventListener('click', removeBook);

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

function printTarget(evt) {
    console.log(evt.target.parentElement);
}

addBookBtn.addEventListener('click', showAddBookForm);
closeFormBtn.addEventListener('click', hideAddBookForm);

