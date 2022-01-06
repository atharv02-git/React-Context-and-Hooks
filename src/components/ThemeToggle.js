import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends React.Component {
    static contextType  = ThemeContext;
    render() { 
        const { toggleThemeHandler } = this.context;
        return (
            <button onClick={ toggleThemeHandler }>Change Theme</button>
        );
    }
}
 
export default ThemeToggle;