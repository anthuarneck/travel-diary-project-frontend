import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Memory = () => {
  const [memory, setMemory] = useState({});
  const { id, memoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/destinations/${id}/memories/${memoryId}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setMemory(responseJSON);
      })
      .catch((error) => console.log(error));
  }, [memory]);

  const handleDelete = () => {
    deleteMemory();
  };

  const deleteMemory = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/destinations/${id}/memories/${memoryId}`, httpOptions)
      .then(() => {
        navigate(`/destinations/${id}/memories`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Memory">
      <h3>{memory.rating}⭐️</h3>
      <h4>{memory.username}</h4>
      <p>{memory.date}</p>
      <p>${memory.cost}</p>
      <p>{memory.review}</p>
      <p>{memory.experiences}</p>
      <Link to={`/destinations/${id}/memories/${memoryId}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Memory;
