// Book Class: Represents a Book
class Book{
    constructor(title, author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
        const StroredBooks = [
            {title:'Book one',
            author:'John Doe',
            isbn:'34344334'},
            {title:'Book two',
            author:'John Doe',
            isbn:'45545'}
        ];
        const books = StroredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');
        
        const row = document.createElement('tr');

        row.innerhtml =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
        
    }

    static deleteBookFromList(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }


    static showAlert(message,className){
        const div = document.createElement('div');
        div.className = 'alert alert-${className}';
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
    }

    static clearFields(){
        document.querySelector('title').value= '';
        document.querySelector('author').value= '';
        document.querySelector('isbn').value= '';

    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit',(e)=> {

    // Prevent actual submit
    e.preventDefault();

    // Get form calues
    const title = document.querySelector('#title').Value;
    const author = document.querySelector('#author').Value;
    const isbn = document.querySelector('#isbn').Value;

    // Validate
    if(title === '' || author === '' || isbn === ''){
        alet('Please fill in all fields')
    } else{

        // Instatiete book
        const book = new Book(title, author, isbn);
        
        
        // Add book to UI
        UI.addBookToList(book);
        
        
        // Clear fields
        UI.clearFields();
        
    }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click',(e)=> {
    UI.deleteBook(e.target)
});