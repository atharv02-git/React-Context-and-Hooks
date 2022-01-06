import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  // whatever properties we need to access will go inside state
  state = {
    isLightTheme: true,
    light: { syntaxColor: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntaxColor: "#ddd", ui: "#333", bg: "#555" },
  };
  //   Theme change handler for ThemeToggle button
  toggleThemeHandler = () => {
      this.setState({ isLightTheme: !this.state.isLightTheme })
  }

  render() {
    return (
      /* this value property is going to takein whatever data we want to provide to the components that this    wrap */
      <ThemeContext.Provider value={{ ...this.state, toggleThemeHandler: this.toggleThemeHandler }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
