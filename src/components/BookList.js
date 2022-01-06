import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {
  static contextType = ThemeContext; //Accessing context
  render() {
    console.log(this.context)
    const { isLightTheme, light, dark } = this.context; //destructuring properties of the context
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list" style={{ background: theme.bg, color: theme.syntaxColor}}>
        <ul>
          <li style={{ background: theme.ui }}>Game of Thrones</li>
          <li style={{ background: theme.ui }}>Harry Potter</li>
          <li style={{ background: theme.ui }}>Narnia</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;