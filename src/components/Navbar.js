import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends React.Component {
  render() {
    return (
      //Accessing context
      <AuthContext.Consumer>{(authContext) => (
      <ThemeContext.Consumer>{(themeContext) => {
          const { isAuhenticated } = authContext;  //destructuring properties of the authcontext
          const { isLightTheme, light, dark } = themeContext; //destructuring properties of the themecontext
          const theme = isLightTheme ? light : dark;
          return ( //This return will return an jsx template
            <nav style={{ background: theme.ui, color: theme.syntaxColor }}>
              <h1>Context App</h1>
              <div>{isAuhenticated ? 'Logged In' : 'Logged out'}</div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}</ThemeContext.Consumer>
      )}</AuthContext.Consumer>
    );
  }
}

export default Navbar;
