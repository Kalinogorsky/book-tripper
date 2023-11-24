import React from 'react';
import './BookItem.css';

const BookItem = ({ title }) => {
  return (
    <div className="book-item">
      {title}
    </div>
  );
};

export default BookItem;
