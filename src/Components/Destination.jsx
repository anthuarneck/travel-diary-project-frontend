import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';



const Destination = ({ destination}) => {
    return (
 <Carousel.Item interval={3000}>
    
        <img src={destination.image_url} />
        <Carousel.Caption>
          <h3>{destination.destination_name}</h3>
          <div>
          <Link to={`/destinations/${destination.id}/memories`}>Details</Link>
          </div>
        </Carousel.Caption>

        </Carousel.Item> 
        );
    }
    
    export default Destination;
    