import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends React.Component {
    static contextType  = ThemeContext;
    render() { 
        const { isLightTheme, toggleThemeHandler } = this.context;
        return (
            <button onClick={ toggleThemeHandler }>{isLightTheme ? 'Black Theme': 'White Theme'}</button>
        );
    }
}
 
export default ThemeToggle;