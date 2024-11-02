import React from 'react';
import './header.css';

function Header() {
    return (
        <header> 
            <img src="../public/menu-icon.png" alt="menu icon"></img>
            <img src="../public/user.png" alt="profile icon"></img>
            <p> username </p>
        </header>
    )
}

export default Header;