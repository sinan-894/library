myLibrary = [];


function Book(name,author,publishedYear){
    this.name = name;
    this.author = author;
    this.publishedYear = publishedYear;
    this.displayDetails = ()=>{
        console.log(`${this.name} written by ${author} published on ${this.publishedYear}`)
    };
}

function addBookToLibrary(name,author,publishedYear) {
    bookObject = new Book(name,author,publishedYear);
    myLibrary.push(bookObject);
}