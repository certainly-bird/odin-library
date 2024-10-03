function Books(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function(){
        return title + ', ' + author + ', ' + pages + ', ' + hasRead;
    }
}

const myLibrary = [];
myLibrary.push(new Books('Rouge Heroes', 'Ben Macintyre', '352', 0));
console.log(myLibrary[0]);

const infoBox = document.querySelector('dialog');
const btnClick = document.getElementById('addBook');
const closeBtnClick = document.getElementById('closeDialogBtn');
const submitted = document.getElementById('submit');
const shelf = document.querySelector('.shelf');

const openInfoBox = () => infoBox.showModal();
btnClick.addEventListener('click', openInfoBox);

const closeInfoBox = () => infoBox.close();
closeBtnClick.addEventListener('click', closeInfoBox);

function addBookToLibrary(){
    let book = new Books(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        Number(document.getElementById('status').value)
    );

    shelf.appendChild(document.createElement('div'));
    const newCard = document.querySelector('.shelf').lastChild;
    newCard.classList.add('book-card');

    const removeBtn = document.createElement('div');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = 'X';

    const bookTitle = document.createElement('h1');
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement('h3');
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement('h3');
    bookPages.textContent = `Pages: ${book.pages}`;

    const bookStatus = document.createElement('div');
    bookStatus.classList.add('readBtn');
    bookStatus.addEventListener('click', changeStatus);
    if(book.hasRead === 0){
        bookStatus.textContent = 'Not Read';
        bookStatus.style.background = 'red';
    }else if(book.hasRead === 1){
        bookStatus.textContent = 'Read';
        bookStatus.style.background = 'green';
    }

    newCard.appendChild(removeBtn);
    newCard.appendChild(bookTitle);
    newCard.appendChild(bookAuthor);
    newCard.appendChild(bookPages);
    newCard.appendChild(bookStatus);

    newCard.firstChild.addEventListener('click', (e) => e.target.parentElement.remove());
}

submitted.addEventListener('click', function(e){
    e.preventDefault();
    addBookToLibrary();
    closeInfoBox();
});

function changeStatus(element){
    if(element.target.textContent === 'Not Read'){
        element.target.textContent = 'Read';
        element.target.style.background = 'green';
    }else if(element.target.textContent === 'Read'){
        element.target.textContent = 'Not Read';
        element.target.style.background = 'red';
    }
}