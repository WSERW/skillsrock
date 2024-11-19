// 1. Реализация простого калькулятора

class Calculator {
    constructor() {
        // Ваш код здесь
    }
    add(a, b) {
        return a + b
    }
    subtract(a, b) {
        return a - b
    }
    multiply(a, b) {
        return a * b
    }
    divide(a, b) {
        if (b === 0) throw new Error('Деление на 0')
        return a / b
    }
}

let calc = new Calculator()
console.log(calc.add(2, 2))
// console.log(calc.divide(2, 0))
console.log(calc.add(2, 2))

// 2. Система управления библиотекой

class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
        this.isAvailable = true
    }
}
class Library {
    constructor() {
        this.books = new Map()
    }
    addBook(book) {
        this.books.set(book.isbn, book)
    }
    borrowBook(isbn) {
        const book = this.books.get(isbn)
        book.isAvailable = false;
    }
    returnBook(isbn) {
        const book = this.books.get(isbn)
        book.isAvailable = true;
    }
    listAvailableBooks() {
        return [...this.books.values()].filter(book => book.isAvailable)
    }
}
let lib = new Library()
let book1 = new Book('test1', 'test1', 1)
let book2 = new Book('test2', 'test2', 2)
let book3 = new Book('test3', 'test3', 3)

lib.addBook(book1)
lib.addBook(book2)
lib.addBook(book3)
lib.borrowBook(1)
lib.returnBook(1)
console.log(lib.listAvailableBooks())