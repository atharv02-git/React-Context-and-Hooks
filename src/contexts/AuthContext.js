import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    isAuhenticated: false,
  };

  toggleAuth = () => {
    this.setState({ isAuhenticated: !this.state.isAuhenticated });
  };

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, toggleAuthHandler: this.toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
