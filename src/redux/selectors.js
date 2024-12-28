import { createSelector } from "@reduxjs/toolkit";

// Base selector to get all books
export const selectBooks = (state) => state.books;

// Genre-specific selectors
export const selectHorrorBooks = createSelector([selectBooks], (books) =>
  books.filter((book) => book.genre === "Horror")
);

export const selectFantasyBooks = createSelector([selectBooks], (books) =>
  books.filter((book) => book.genre === "Fantasy")
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Science Fiction")
);
