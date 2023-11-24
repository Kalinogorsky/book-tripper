import React from 'react';
import BookItem from '../components/BookItem';
import './BookChoicePage.css';

const BookChoicePage = () => {
  const books = ["книга 1", "книга 2", "книга 3", "книга 4", "книга 5",
                    "книга 6", "книга 7", "книга 8", "книга 9",
                    "книга 10", "книга 11", "книга 12", "книга 13", "книга 14", "книга 15", "книга 16"];

  return (
    <div className="books-page">
      <header className="books-header">
        <div className="chat-icon">
            <span className="material-symbols-outlined">
                speaker_notes
            </span>
        </div>
        <h1 className="books-title">Book tripper</h1>
      </header>
      <div className="books-grid">
        {books.map((book, index) => (
          <BookItem key={index} title={book} /> // Использован index в качестве ключа из-за одинаковых названий
        ))}
      </div>
    </div>
  );
  
};

export default BookChoicePage;
