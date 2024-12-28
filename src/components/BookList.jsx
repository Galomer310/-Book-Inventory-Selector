import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../redux/selectors';

const BookList = () => {
  const [genre, setGenre] = useState('All');
  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const booksToDisplay =
    genre === 'Horror'
      ? horrorBooks
      : genre === 'Fantasy'
      ? fantasyBooks
      : genre === 'Science Fiction'
      ? scienceFictionBooks
      : allBooks;

  return (
    <div>
      <h1>Book Inventory</h1>
      <select onChange={handleGenreChange} value={genre}>
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <ul>
        {booksToDisplay.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
