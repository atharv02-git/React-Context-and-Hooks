import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function BookList() {
  const {isLightTheme, light, dark} = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntaxColor}}>
        <ul>
          <li style={{ background: theme.ui }}>Game of Thrones</li>
          <li style={{ background: theme.ui }}>Harry Potter</li>
          <li style={{ background: theme.ui }}>Narnia</li>
        </ul>
      </div>
  )
}