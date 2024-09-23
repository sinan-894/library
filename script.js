d = {
    name:'hi',
    author:'me',
    publishedYear:2024,
    pages:69,

}


myLibrary = [d];


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

function createInfoElementsWithTextContent(name,author,publishedYear,pages){
    console.log(name)
    const bookName =  document.createElement('section');

    bookName.textContent = name
    const bookAuthor =  document.createElement('section');
    bookAuthor.textContent = author
    const bookYear =  document.createElement('section');
    bookYear.textContent = publishedYear
    const bookPages =  document.createElement('section');
    bookPages.textContent = pages;

    return [bookName,bookAuthor,bookYear,bookPages]
}

function createStatusButton(book){
    const bookStatus =  document.createElement('button');
    bookStatus.classList.add('book-status');
    bookStatus.textContent ='Not Finished';

    bookStatus.addEventListener('click',()=>{
        if(book.isFinished){
            bookStatus.textContent ='Not Finished';
            bookStatus.classList.remove('finish');
            book.isFinished = false;
        }
        else{
            bookStatus.textContent ='Finished';
            bookStatus.classList.add('finish');
            book.isFinished = true;
        }
    })

    return bookStatus;


}


function displayBookInLibrary(){
    const bookCollections =  document.querySelector('.books');
    myLibrary.map((book)=>{
        console.log(book.name)
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card')
        
        const arrayOfInfoElements = createInfoElementsWithTextContent(book.name,book.author,book.publishedYear,book.pages);
        arrayOfInfoElements.map((element)=>{
            element.classList.add('book-info')
            bookCard.appendChild(element);
        })
        
        const bookStatus =  createStatusButton(book);
        bookCard.appendChild(bookStatus);

        const bookRemove =  document.createElement('button');
        bookRemove.classList.add('book-remove')
        bookRemove.textContent = 'Remove Book'
        bookRemove.addEventListener('click',()=>{
            bookCollections.removeChild(bookCard)
        })
        
        bookCard.appendChild(bookRemove);
        
        bookCollections.appendChild(bookCard)

    });

}
const bookAdd = document.querySelector('.add-books');
const dialogBox = document.querySelector('dialog');
// add.addEventListener('click',()=>dd.showModal())

displayBookInLibrary()



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

