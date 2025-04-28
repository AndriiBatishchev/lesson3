// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.


export class Book {
    constructor(name, author,yearOfPublication){
        this.name = name;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
            }

    printInfo(){
        console.log(`Full description of the book: Book name: '${this.name}', Book author: ${this.author}, year of publication: ${this.yearOfPublication}`);    
            }

//Name: Get+set
    get name(){
        return this._name;
    }

    set name(valueName){
        if(typeof valueName !== 'string'){
            console.log("Error. Don't use numbers for Name Book");
        return;
        } 
    this._name = valueName;
    }

//author: Get+set
get author(){
    return this._author;
}

set author(valueAuthor){
    if(typeof valueAuthor !== 'string'){
        console.log("Error. Don't use numbers for author");
    return;
    } 
this._author = valueAuthor;
}

//yearOfPublication: Get+set
get yearOfPublication(){
    return this._yearOfPublication;
}

set yearOfPublication(valueyearOfPublication){
    if(typeof valueyearOfPublication !== 'number'){
        console.log("Error. Don't use letters");
    return;
    } 
this._yearOfPublication = valueyearOfPublication;
}
//////////////Add static method
//Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання.
//Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)

static findOldestBook(bookArr) {
    let oldBook = bookArr[0];
    for (let book of bookArr) {
        if (book.yearOfPublication < oldBook.yearOfPublication) {
            oldBook = book;
        }
    }
    return oldBook;
}
}



// ///////////////////////////////////////////////////////////////////////////////////////////////
// const book_1 = new Book('The Art of Business Warfare','David Brown', 2022);
// //const book_1 = new Book(123,'David Brown', 2022);
// //const book_1 = new Book('The Art of Business Warfare',123, 2022);
// //const book_1 = new Book('The Art of Business Warfare','David Brown', '2022');
// const book_2 = new Book('How to lead','David Rubenstein', 2014);
// const book_3 = new Book('The Toyota Way','Jeffrey Liker', 2011);

// book_1.printInfo();
// book_2.printInfo();
// book_3.printInfo();

// book_1.name = 'New Name Book';  // calls the setter
// //book_1.name = 123123;                              //Error. Don't use numbers for Name Book
// //book_1.author = 123123;                            //Error. Error. Don't use numbers for author
// //book_1.yearOfPublication = "123123";               //Error. Don't use letters

// // calls the Getter
// //console.log(`Full description of the book: Book name: '${book_1.name}', Book author: ${book_1.author}, year of publication: ${book_1.yearOfPublication}`);
// // ///////
// //Static (task 4)

// // const bookArr = [book_1, book_2, book_3];

// // const oldBook = Book.findOldestBook(bookArr);

// // console.log("The oldest book is:");
// // oldBook.printInfo();
// ///////////
