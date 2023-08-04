let bookCollection = [];

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
    bookCollection.append(book);
};