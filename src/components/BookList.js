import React from 'react';

class BookList extends React.Component {
  render() { 
    return (
      <div className="book-list">
        <ul>
          <li>Game of Thrones</li>
          <li>Harry Potter</li>
          <li>Narnia</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;