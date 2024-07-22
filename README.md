## Running the Code

To get started with this project, follow the instructions below:

1. **Install Dependencies**

   Navigate to the `server` directory and install the necessary dependencies by running:

   ```bash
   cd server
   npm install
2. **Configure Environment Variables**

This project requires a .env file that contains the database URL. Make sure to add this file to ensure the code can read from and write to the database.

3. **Set Up the Database**

Run the following SQL queries to create and populate your database:

Required `SQL` Queries:

```bash
CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

INSERT INTO books (title, author) VALUES
('To Kill a Mockingbird', 'Harper Lee'),
('1984', 'George Orwell'),
('The Great Gatsby', 'F. Scott Fitzgerald'),
('The Catcher in the Rye', 'J.D. Salinger'),
('Pride and Prejudice', 'Jane Austen'),
('The Lord of the Rings', 'J.R.R. Tolkien'),
('The Hobbit', 'J.R.R. Tolkien'),
('War and Peace', 'Leo Tolstoy'),
('The Odyssey', 'Homer'),
('Moby Dick', 'Herman Melville'),
('Brave New World', 'Aldous Huxley'),
('The Road', 'Cormac McCarthy'),
('The Shining', 'Stephen King'),
('Catch-22', 'Joseph Heller'),
('Slaughterhouse-Five', 'Kurt Vonnegut'),
('The Bell Jar', 'Sylvia Plath'),
('Beloved', 'Toni Morrison'),
('The Old Man and the Sea', 'Ernest Hemingway'),
('Fahrenheit 451', 'Ray Bradbury');
