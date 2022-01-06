import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';

// context

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        {/* when we surround like <ThemeContextProvider> using component <Navbar /> and <BookList /> are attached to the props of the component that we wrap, so we can access the children component inside the parent component(i.e: ThemeContextProvider)*/}
        <Navbar /> 
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
