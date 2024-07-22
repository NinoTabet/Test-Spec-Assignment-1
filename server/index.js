require('dotenv').config();
const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json());

// search endpoint to query database for requested book title
app.get("/search", async (req, res) => {

  // pulls book title from request
  const bookTitle = req.query.title;

  try {

    // searches databse for all books with a similar title to the request
    const searchResults = await pool.query(
        "SELECT * FROM books WHERE title ILIKE ($1)",
        [`%${bookTitle}%`]
    );
    
    // if the book isn't found, this returns 404
    if (searchResults.rows.length === 0) {
        res.status(404).json({message: 'Book not found'});
    }

    // return json of search results
    res.json(searchResults.rows);

  } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

// create endpoint to create a new book in the database
app.post("/create", async (req, res) => {
  
  const { title, author } = req.body;

  try {

    // returns 400 response if the title or author is missing from request body
    if (!title || !author) {
      return res.status(400).json({ message: 'Title and author are required' });
    }

    // Checks if the book already exists
    const existingBook = await pool.query(
      "SELECT * FROM books WHERE title ILIKE $1",
      [title]
    );

    // if book exists, responds with 404 status
    if (existingBook.rows.length > 0) {
      return res.status(400).json({ message: 'Book already exists' });
    }

    // Inserts the new book into the database
    const result = await pool.query(
      "INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *",
      [title, author]
    );

    // Respond 200 status
    res.status(200).json({ message: 'Book created successfully' });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// delete endpoint to delete a book from the database
app.delete("/delete", async (req, res) => {
    
    try {

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});