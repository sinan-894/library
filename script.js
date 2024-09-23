myLibrary = [];


function Book(name,author,publishedYear,pages){
    this.name = name;
    this.author = author;
    this.publishedYear = publishedYear;
    this.pages = pages
    this.isFinished = false
    this.displayDetails = ()=>{
        console.log(`${this.name} written by ${author} published on ${this.publishedYear}`)
    };
}

function addBookToLibrary(name,author,publishedYear) {
    bookObject = new Book(name,author,publishedYear);
    myLibrary.push(bookObject);
    console.log(myLibrary);
}

function createInfoElements(){
    const bookName =  document.createElement('section').classList.add('book-name');
    const bookAuthor =  document.createElement('section').classList.add('book-author');
    const bookYear =  document.createElement('section').classList.add('book-year');
    const bookPages =  document.createElement('section').classList.add('book-pages');

    return [bookName,bookAuthor,bookYear,bookPages]
}


function displayBookInLibrary(){
    const bookCollections =  document.querySelector('.books');
    myLibrary.map((book)=>{
        const bookCard = document.createElement('div').classList.add('book-card');
        
        const bookName =  document.createElement('section').classList.add('book-name');
        bookName.textContent = book.name
        bookCard.appendChild(bookName);
        const bookAuthor =  document.createElement('section').classList.add('book-author');
        bookAuthor.textContent = book.author
        bookCard.appendChild(bookAuthor);
        const bookYear =  document.createElement('section').classList.add('book-year');
        bookYear.textContent = book.publishedYear
        bookCard.appendChild(bookYear);
        const bookPages =  document.createElement('section').classList.add('book-pages');
        bookPages.textContent = book.pages
        bookCard.appendChild(bookPages);
        const bookStatus =  document.createElement('button').classList.add('book-status');
        bookCard.appendChild(bookStatus);
        const bookRemove =  document.createElement('button').classList.add('book-remove');
        bookCard.appendChild(bookRemove);

    });
}



// const submitFormInput = document.querySelector('#submit');
// console.log(submitFormInput)

// submitFormInput.addEventListener('click',(event)=>{
//     console.log('jjjjjjaaaaaaa')
//     event.preventDefault();
//     const bookFormInput = document.querySelector('#name').value
//     const authorFormInput = document.querySelector('#author').value
//     const yearFormInput = document.querySelector('#year').value
//     console.log('jjjjjj')
//     addBookToLibrary(bookFormInput,authorFormInput,yearFormInput)
// })

