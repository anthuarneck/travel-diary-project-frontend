import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to="/destinations">Destinations</Link>
            </h1>
            <button>
                <Link to="/destinations/new">Add a Destination</Link>
            </button>
        </nav>
    );
}

export default NavBar;
