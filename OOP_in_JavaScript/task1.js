import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

// Task 1

console.log("---TASK1---");
const book_1 = new Book("The Art of Business Warfare", "David Brown", 2022);
//const book_1 = new Book(123,'David Brown', 2022);
//const book_1 = new Book('The Art of Business Warfare',123, 2022);
//const book_1 = new Book('The Art of Business Warfare','David Brown', '2022');
const book_2 = new Book("How to lead", "David Rubenstein", 2014);
const book_3 = new Book("The Toyota Way", "Jeffrey Liker", 2011);

book_1.printInfo();
book_2.printInfo();
book_3.printInfo();

// Task 2
console.log("---TASK2---");

const eBook1 = new EBook("The Toyota Way", "Jeffrey Liker", 2011, "PDF");
//const eBook1 = new EBook('The Toyota Way','Jeffrey Liker', 2011, 'PDF123');
//const eBook1 = new EBook('The Toyota Way','Jeffrey Liker', 2011, 123123);
eBook1.printInfo();

// Task 3
console.log("---TASK3---");

console.log("------From Book------");
book_1.name = "New Name Book"; // calls the setter
//book_1.name = 123123;                              //Error. Don't use numbers for Name Book
//book_1.author = 123123;                            //Error. Error. Don't use numbers for author
//book_1.yearOfPublication = "123123";               //Error. Don't use letters

// calls the Getter
console.log(
  `Full description of the book: Book name: '${book_1.name}', Book author: ${book_1.author}, year of publication: ${book_1.yearOfPublication}`,
);
// ///////
console.log("------From EBook------");
eBook1.fileFormat = "NewFormat"; // calls the setter
// eBook1.fileFormat = 123123;                    //Error. Don't use numbers
// eBook1.name = 123123;                          //Error. Don't use numbers for Name Book
// eBook1.author = 123123;                        //Error. Error. Don't use numbers for author
// eBook1.yearOfPublication = "123123";           //Error. Don't use letters

// // calls the Getter
console.log(
  `Full description of the book: Book name: '${eBook1.name}', Book author: ${eBook1.author}, year of publication: ${eBook1.yearOfPublication}, file format: ${eBook1.fileFormat} `,
);
// ////

// Task 4
console.log("---TASK4---");
const bookArr = [book_1, book_2, book_3, eBook1];
const oldBook = Book.findOldestBook(bookArr);

console.log("The oldest book is:");
oldBook.printInfo();

// Task 5
console.log("---TASK5---");
const eBookFromBook = EBook.createFromBook(book_2, "DOXs");
eBookFromBook.printInfo();
