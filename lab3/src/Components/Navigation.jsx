import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.svg'

function Navigation() {
    return (
        <nav className="fixed-navigation">
            <img className="logo" src={Logo} alt="Logo"/>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse-hotels">Find offers</Link></li>
                <li><Link to="/hotel-page-editable">Add new offers</Link></li>
                <li><Link to="/my-offers">My offers</Link></li>
                <li><Link to="/favorite-offers">Favorites</Link></li>
            </ul>
            <button className="button primary">Log out</button>
        </nav>
    );
}

export default Navigation;
