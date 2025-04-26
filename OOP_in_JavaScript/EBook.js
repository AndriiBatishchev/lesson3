// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

import { Book } from "./Book.js";
export class EBook extends Book{
    constructor(name, author,yearOfPublication,fileFormat){
        super(name, author, yearOfPublication);
        this.fileFormat = fileFormat;
            }
            
printInfo(){
    console.log(`Full description of the book: Book name: '${this.name}', Book author: ${this.author}, year of publication: ${this.yearOfPublication}, file format ${this.fileFormat}`);    
            }

    get fileFormat(){
        return this._fileFormat;
    }
    set fileFormat(valueFF){
        // if(typeof value !== 'string' || !/^[a-zA-Z]+$/.test(value)){
        if(typeof valueFF !== 'string'){
            console.log("Error. Don't use numbers");
            return;
        } 
    this._fileFormat = valueFF;

}

//////////////
//Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок  та повертати екземпляр класу EBook

static createFromBook(bookInstance, fileFormat) {
    return new EBook(bookInstance.name, bookInstance.author, bookInstance.yearOfPublication, fileFormat);
}
}




////////
// const eBook1 = new EBook('The Toyota Way','Jeffrey Liker', 2011, 'PDF');
// //const eBook1 = new EBook('The Toyota Way','Jeffrey Liker', 2011, 'PDF123');
// //const eBook1 = new EBook('The Toyota Way','Jeffrey Liker', 2011, 123123);
// eBook1.printInfo();

// eBook1.fileFormat = 'NewFormat';  // calls the setter
// //eBook1.fileFormat = 123123;                    //Error. Don't use numbers

// //eBook1.name = 123123;                          //Error. Don't use numbers for Name Book
// //eBook1.author = 123123;                        //Error. Error. Don't use numbers for author
// //eBook1.yearOfPublication = "123123";           //Error. Don't use letters

// // calls the Getter
// console.log(`Full description of the book: Book name: '${eBook1.name}', Book author: ${eBook1.author}, year of publication: ${eBook1.yearOfPublication}, file format: ${eBook1.fileFormat} `);
// ////


/////////Task5
// const eBookFromBook = EBook.createFromBook(book_1, 'DOXs');
// eBookFromBook.printInfo();