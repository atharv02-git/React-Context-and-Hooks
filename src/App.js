import React from "react";
import AuthToggle from "./components/AuthToggle";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

// context

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/* when we surround like <ThemeContextProvider> using component <Navbar /> and <BookList /> are attached to the props of the component that we wrap, so we can access the children component inside the parent component(i.e: ThemeContextProvider)*/}
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
          <AuthToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
