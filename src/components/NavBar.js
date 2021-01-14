import React, { Component } from 'react';
import Logo from '../images/SUSLogo.png';

class NavBar extends Component{
    render() {
        return (
            <div class='navbar-container'>
                <div class='logo-container'>
                    <img src={Logo} alt='sus-logo' class='nav-logo'></img>
                </div>
                <div class='nav-option-row'>
                    <div class='nav-button'>
                        <h2 class='home'>home</h2>
                    </div>
                    <div class='nav-button'>
                        <h2 class='events'>events</h2>
                    </div>
                    <div class='nav-button'>
                        <h2 class='about'>about</h2>
                    </div>
                    <div class='nav-button'>
                        <h2 class='contact'>contact</h2>
                    </div>
                    <div class='nav-button'>
                        <h2 class='register'>register</h2>
                    </div>
                </div>
            </div>
        );
    };
};

export default NavBar;