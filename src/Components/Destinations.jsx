import React from "react";
import { useState, useEffect } from "react";
import Destination from "./Destination";

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
    <div className="Destinations">
        <section>
      {destinations.map((destination) => {
        return <Destination key={destination.id} destination={destination} />;
      })}
      </section>
    </div>
  );
};

export default Destinations;
