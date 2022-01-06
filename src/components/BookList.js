import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends React.Component {
  render() {
    return (
      //Accessing context
      <ThemeContext.Consumer>{(context) => {
          const { isLightTheme, light, dark } = context; //destructuring properties of the context
          const theme = isLightTheme ? light : dark;
          return ( //This return will return an jsx template
            <div className="book-list" style={{ background: theme.bg, color: theme.syntaxColor }}>
              <ul>
                <li style={{ background: theme.ui }}>Game of Thrones</li>
                <li style={{ background: theme.ui }}>Harry Potter</li>
                <li style={{ background: theme.ui }}>Narnia</li>
              </ul>
            </div>
          );
        }}</ThemeContext.Consumer>
    );
  }
}

export default BookList;
