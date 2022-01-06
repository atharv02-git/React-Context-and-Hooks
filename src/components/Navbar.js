import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends React.Component {
  render() {
    return (
      //Accessing context
      <ThemeContext.Consumer>{(context) => {
          const { isLightTheme, light, dark } = context; //destructuring properties of the context
          const theme = isLightTheme ? light : dark;
          return ( //This return will return an jsx template
            <nav style={{ background: theme.ui, color: theme.syntaxColor }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
