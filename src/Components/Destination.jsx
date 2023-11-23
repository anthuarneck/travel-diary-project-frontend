import React from 'react';
import { Link } from 'react-router-dom';

const Destination = ({ destination}) => {
    return (
        <div className='Destination'>
            <h2>{destination.destination_name}</h2>
            <img src={destination.image_url} alt="image of destination" />
            <Link to={`/destinations/${destination.id}`}>Link!</Link>
        </div>
    );
}

export default Destination;
