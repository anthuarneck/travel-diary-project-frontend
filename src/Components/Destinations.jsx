import React from "react";
import { useState, useEffect } from "react";
import Destination from "./Destination";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const API = import.meta.env.VITE_API_URL;

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch(`${API}/destinations`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setDestinations(responseJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Carousel className="Carousel">
      {destinations.map((destination) => (
        <Carousel.Item interval={4000}>
          <img src={destination.image_url} />
          <Carousel.Caption>
            
          <Link to={`/destinations/${destination.id}/memories`}><h2>{destination.destination_name}</h2></Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Destinations;
