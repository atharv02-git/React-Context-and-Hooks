import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  // whatever properties we need to access will go inside state
  state = {
    isLightTheme: true,
    light: { syntaxColor: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntaxColor: "#ddd", ui: "#333", bg: "#555" },
  };
  render() {
    return (
      /* this value property is going to takein whatever data we want to provide to the components that this    wrap */
      <ThemeContext.Provider value={{ ...this.state }}>
          {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
