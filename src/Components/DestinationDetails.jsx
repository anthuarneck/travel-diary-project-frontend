import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const DestinationDetails = () => {
  const [destination, setDestination] = useState({});
  const [memories, setMemories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/destinations/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setDestination(responseJSON);
        console.log(destination)
      })
      .catch((error) => console.log(error));
  }, [id]);
  
  useEffect(() => {
    fetch(`${API}/destinations/${id}/memories`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setMemories(responseJSON);
      })
      .catch((error) => console.log(error));
  }, [id]);
  

  return (
    <article className="destinationDetails">
      <h3>{destination.destination_name}</h3>
      <img src={destination.image_url} alt="image of destination" />
      <ul>
        {memories.map((memory) => {
          return (
            <li>
              <Link to={`/destinations/${id}/memories/${memory.id}`}>
                {memory.rating}<br />
                {memory.review}
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default DestinationDetails;
