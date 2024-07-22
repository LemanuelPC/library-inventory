document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('book-form');
    const bookTable = document.getElementById('book-table').getElementsByTagName('tbody')[0];
    const saveButton = document.getElementById('save-button');

    fetchBooks();

    saveButton.addEventListener('click', function() {
        const bookId = document.getElementById('book-id').value;
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        const isbn = document.getElementById('book-isbn').value;
        const publishedDate = document.getElementById('book-published-date').value;
        const price = document.getElementById('book-price').value;

        if (!title || !author || !isbn || !publishedDate || !price) {
            alert('All fields must be filled out');
            return;
        }

        const book = {
            title: title,
            author: author,
            isbn: isbn,
            publishedDate: publishedDate,
            price: parseFloat(price)
        };

        if (bookId) {
            updateBook(bookId, book);
        } else {
            addBook(book);
        }

        // Clear the form fields after submission
        document.getElementById('book-id').value = '';
        document.getElementById('book-title').value = '';
        document.getElementById('book-author').value = '';
        document.getElementById('book-isbn').value = '';
        document.getElementById('book-published-date').value = '';
        document.getElementById('book-price').value = '';
    });

    function fetchBooks() {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => {
                bookTable.innerHTML = '';
                data.forEach(book => {
                    const row = bookTable.insertRow();
                    row.insertCell(0).innerText = book.id;
                    row.insertCell(1).innerText = book.title;
                    row.insertCell(2).innerText = book.author;
                    row.insertCell(3).innerText = book.isbn;
                    row.insertCell(4).innerText = book.publishedDate;
                    row.insertCell(5).innerText = book.price;
                    const actionsCell = row.insertCell(6);
                    const editButton = document.createElement('button');
                    editButton.innerText = 'Edit';
                    editButton.onclick = () => editBook(book);
                    const deleteButton = document.createElement('button');
                    deleteButton.innerText = 'Delete';
                    deleteButton.onclick = () => deleteBook(book.id);
                    actionsCell.appendChild(editButton);
                    actionsCell.appendChild(deleteButton);
                });
            });
    }

    function addBook(book) {
        fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(fetchBooks)
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }

    function updateBook(id, book) {
        fetch(`/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(fetchBooks)
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }

    function deleteBook(id) {
        fetch(`/api/books/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return fetchBooks();
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }

    function editBook(book) {
        document.getElementById('book-id').value = book.id;
        document.getElementById('book-title').value = book.title;
        document.getElementById('book-author').value = book.author;
        document.getElementById('book-isbn').value = book.isbn;
        document.getElementById('book-published-date').value = book.publishedDate;
        document.getElementById('book-price').value = book.price;
    }
});