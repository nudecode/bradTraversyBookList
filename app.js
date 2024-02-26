// Book Class Represents a book
class Book {
    constructor(title, author, isbn) {
        this.title;
        this.author;
        this.isbn;
    }
}

// UI Class Handle UI Tasks
class UI {
    // display books
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Harry Potter and the Philosophers Stone',
                author: 'J.K Rowling',
                isbn: '890123456789',
            },
            {
                title: 'Star Wars A New Hope',
                author: 'George Lucas',
                isbn:   '890987654321'
            }
            
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));  
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm
        delete"><i class="fa-solid fa-trash"></td>
        `;

        list.appendChild(row);

    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }


}

// Store Class Handles Storage

// Event: Display books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => 
{
//  Prevent default submit
e.preventDefault();
//  Get form values
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const isbn = document.querySelector('#isbn').value;

// instatiate book

const book = new Book(title, author, isbn);
console.log(book);
// Add book to UI
UI.addBookToList(book);

// Clear fields
UI.clearFields()

});

// Event: Remove a book
