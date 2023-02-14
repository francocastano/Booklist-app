"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Book Class: Represents a Book
var Book = function Book(title, author, isbn) {
  _classCallCheck(this, Book);

  this.title = title;
  this.author = author;
  this.isbn = isbn;
}; // UI Class: Handle UI Tasks


var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, null, [{
    key: "displayBooks",
    value: function displayBooks() {
      var StroredBooks = [{
        title: 'Book one',
        author: 'John Doe',
        isbn: '34344334'
      }, {
        title: 'Book two',
        author: 'John Doe',
        isbn: '45545'
      }];
      var books = StroredBooks;
      books.forEach(function (book) {
        return UI.addBookToList(book);
      });
    }
  }, {
    key: "addBookToList",
    value: function addBookToList(book) {
      var list = document.querySelector('#book-list');
      var row = document.createElement('tr');
      row.innerhtml = "\n        <td>".concat(book.title, "</td>\n        <td>").concat(book.author, "</td>\n        <td>").concat(book.isbn, "</td>\n        <td><a href=\"#\" class=\"btn btn-danger btn-sm delete\">X</a></td>\n        ");
      list.appendChild(row);
    }
  }, {
    key: "deleteBookFromList",
    value: function deleteBookFromList(el) {
      if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  }, {
    key: "showAlert",
    value: function showAlert(message, className) {
      var div = document.createElement('div');
      div.className = 'alert alert-${className}';
      div.appendChild(document.createTextNode(message));
      var container = document.querySelector('.container');
      var form = document.querySelector('#book-form');
    }
  }, {
    key: "clearFields",
    value: function clearFields() {
      document.querySelector('title').value = '';
      document.querySelector('author').value = '';
      document.querySelector('isbn').value = '';
    }
  }]);

  return UI;
}(); // Event: Display Books


document.addEventListener('DOMContentLoaded', UI.displayBooks); // Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', function (e) {
  // Prevent actual submit
  e.preventDefault(); // Get form calues

  var title = document.querySelector('#title').Value;
  var author = document.querySelector('#author').Value;
  var isbn = document.querySelector('#isbn').Value; // Validate

  if (title === '' || author === '' || isbn === '') {
    alet('Please fill in all fields');
  } else {
    // Instatiete book
    var book = new Book(title, author, isbn); // Add book to UI

    UI.addBookToList(book); // Clear fields

    UI.clearFields();
  }
}); // Event: Remove a Book

document.querySelector('#book-list').addEventListener('click', function (e) {
  UI.deleteBook(e.target);
});