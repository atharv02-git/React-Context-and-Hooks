import React from 'react'
import { AuthContext } from '../contexts/AuthContext';

class AuthToggle extends React.Component {
    static contextType = AuthContext;
    render() { 
        const { isAuhenticated, toggleAuthHandler } = this.context;
        return (
            <button onClick = {toggleAuthHandler}>{isAuhenticated ? 'Logout' : 'Login'}</button>
        );
    }
}
 
export default AuthToggle;