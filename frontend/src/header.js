import React from 'react';
import './header.css';

function Header() {
    return (
        <header> 
            <img src="../public/menu-icon.png" alt="menu icon"></img>
            <h1> Constellearn </h1>
            <div class="user">
                <img src="../public/user.png" alt="profile icon"></img>
                <p> username </p>
            </div>
        </header>
    )
}

export default Header;