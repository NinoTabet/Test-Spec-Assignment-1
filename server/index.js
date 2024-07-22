const express = require("express");
const app = express();
const pool = require("./db");

app.use(cors());
app.use(express.json());

// search endpoint to query database for requested book title
app.get("/search", async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// create endpoint to create a new book in the database
app.post("/create", async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

// delete endpoint to delete a book from the database
app.delete("/delete", async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});