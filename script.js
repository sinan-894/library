

const myLibrary = [];


class Book{
    
    constructor(name,author,publishedYear,pages){
        this.name = name;
        this.author = author;
        this.publishedYear = publishedYear;
        this.pages = pages
        this.isFinished = false
    }
    displayDetails(){
        console.log(`${this.name} written by ${author} published on ${this.publishedYear}`)
    }
}




function addBookToLibrary(name,author,publishedYear,pages) {
    const bookObject = new Book(name,author,publishedYear,pages);
    myLibrary.push(bookObject);
    displayBookInLibrary(bookObject)
    console.log(myLibrary);
}

function displayBookInLibrary(book){
    const bookCardElement = createBookCardElement(book);
    library.appendChild(bookCardElement)
}

function createBookCardElement(book){
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

    createRemoveBookCardButton(bookCard);
    
    return bookCard
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


function createRemoveBookCardButton(bookCard,book){
    const bookRemove =  document.createElement('button');
    bookRemove.classList.add('book-remove')
    bookRemove.textContent = 'Remove Book'
    bookRemove.addEventListener('click',()=>{
        library.removeChild(bookCard)
        let i = myLibrary.indexOf(book)
        console.log(myLibrary);
        myLibrary.splice(i,1)
        console.log(myLibrary);
    })
    bookCard.appendChild(bookRemove);
    
}


function displayExistingBookInLibrary(){
    myLibrary.map((book)=>displayBookInLibrary(book))
}


function createBookAddForm(){
    const bookAdd = document.querySelector('.add-books');
    const dialogBox = document.querySelector('dialog');
    bookAdd.addEventListener('click',()=>dialogBox.showModal())
    const submitFormInput = document.querySelector('#submit');
    const cancelFormButton = document.querySelector('#cancel')
    console.log(submitFormInput)
    
    submitFormInput.addEventListener('click',(event)=>{
        event.preventDefault();
        if (!isFormValid()){
            console.log('invalid')
            return ;
        }
        const bookFormInput = document.querySelector('#name').value
        const authorFormInput = document.querySelector('#author').value
        const yearFormInput = document.querySelector('#year').value
        const pageFormInput = document.querySelector('#pages').value
        addBookToLibrary(bookFormInput,authorFormInput,yearFormInput,pageFormInput)
        dialogBox.close()
    })

    cancelFormButton.addEventListener('click',()=>dialogBox.close())
}

function isFormValid(){
    const bookFormInput = document.querySelector('#name')
    const authorFormInput = document.querySelector('#author')
    const yearFormInput = document.querySelector('#year')
    const pageFormInput = document.querySelector('#pages')
    let validFlag  = true;

    function errorMessage(name,message){
        const span = document.querySelector(`.${name}-span`)
        span.textContent = message;
        if (message!='') validFlag = false
    }

    
    (bookFormInput.validity.valueMissing)? errorMessage('name','enter a book name'):errorMessage('name','');
    (authorFormInput.validity.valueMissing)? errorMessage('author','enter a authors name'):errorMessage('author','');
    (yearFormInput.validity.valueMissing)? errorMessage('year','give a year'):errorMessage('year','');
    (pageFormInput.validity.valueMissing)? errorMessage('pages','give number of page'):errorMessage('pages','');

    return validFlag
}



const library = document.querySelector('.books');
displayExistingBookInLibrary()
createBookAddForm()


