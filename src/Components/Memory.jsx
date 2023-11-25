import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Memory = () => {
  const [memory, setMemory] = useState({});
  const { id, memoryId } = useParams();

  useEffect(() => {
    fetch(`${API}/destinations/${id}/memories/${memoryId}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setMemory(responseJSON);
        console.log(memory);
      })
      .catch((error) => console.log(error));
  }, [memory]);

  return (
    <div className="Memory">
      <h3>{memory.rating}</h3>
      <p>{memory.date}</p>
      <p>${memory.cost}</p>
      <p>{memory.review}</p>
      <p>{memory.experiences}</p>
    </div>
  );
};

export default Memory;
