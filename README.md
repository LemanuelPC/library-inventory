# Library Inventory Management System

This project is a simple web application for managing a library's book inventory. It allows users to add, view, update, and delete books from the inventory.

## Technologies Used
- Java
- Spring Boot
- Hibernate
- RESTful APIs
- MySQL
- Docker
- HTML, CSS, JavaScript

## Prerequisites
- JDK 17 or higher
- Maven
- Docker and Docker Compose

## Setup and Running the Application

### Step 1: Clone the Repository
```bash
git clone <repo-url>
cd library-inventory
````
### Step 2: Build the Project
```bash
mvn clean package -DskipTests
````
### Step 3: Run the Application with Docker
```bash
docker-compose up --build
````
### Step 4: Access the Application
Open your web browser and navigate to `http://localhost:8080`.

## API Endpoints
- `GET /api/books` - Retrieve a list of all books.
- `GET /api/books/{id}` - Retrieve details of a specific book by ID.
- `POST /api/books` - Add a new book.
- `PUT /api/books/{id}` - Update an existing book by ID.
- `DELETE /api/books/{id}` - Delete a book by ID.

## Usage Instructions
### Add a New Book
- Fill in the book details in the form and click the "Save" button.

### Edit a Book
- Click the "Edit" button next to the book you want to edit. This will populate the form with the book's details.
- Update the book details as needed and click "Save".

### Delete a Book
- Click the "Delete" button next to the book you want to delete.

## Troubleshooting
- Ensure Docker and Docker Compose are installed and running.
- Verify that the MySQL container is properly configured and running.
- Check the application logs for any errors.

### Common Issues and Solutions
#### Docker Compose Command Not Found
- Ensure Docker Desktop is installed and running.
- Add Docker CLI to your system's PATH if it's not recognized.

#### Application Fails to Start
- Check the application logs for any startup errors.
- Ensure the MySQL service is running and accessible.

#### Database Connection Issues
- Verify the database connection properties in `application.properties`.
- Ensure the MySQL container is properly configured and running.
