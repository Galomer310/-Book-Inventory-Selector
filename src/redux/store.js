import { configureStore, createSlice } from "@reduxjs/toolkit";

// Book inventory slice
const bookSlice = createSlice({
  name: "books",
  initialState: [
    { id: 1, title: "The Shining", author: "Stephen King", genre: "Horror" },
    {
      id: 2,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
    },
    { id: 3, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
    { id: 4, title: "It", author: "Stephen King", genre: "Horror" },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    {
      id: 6,
      title: "Neuromancer",
      author: "William Gibson",
      genre: "Science Fiction",
    },
    { id: 7, title: "Frankenstein", author: "Mary Shelley", genre: "Horror" },
    {
      id: 8,
      title: "A Game of Thrones",
      author: "George R.R. Martin",
      genre: "Fantasy",
    },
    {
      id: 9,
      title: "The Martian",
      author: "Andy Weir",
      genre: "Science Fiction",
    },
    { id: 10, title: "Pet Sematary", author: "Stephen King", genre: "Horror" },
  ],
  reducers: {},
});

// Redux store
const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

export default store;
