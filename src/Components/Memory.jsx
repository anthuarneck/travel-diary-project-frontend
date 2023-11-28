import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "./UserComponents/UserContext";

const API = import.meta.env.VITE_API_URL;

const Memory = () => {
  const { user } = useAuth();
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


  // <div className="Memory">
  //   <h3>{memory.rating}⭐️</h3>
  //   <h4>{memory.username}</h4>
  //   <p>{memory.date}</p>
  //   <p>${memory.cost}</p>
  //   <p>{memory.review}</p>
  //   <p>{memory.experiences}</p>
  //   {memory.username === user.username ? (
  //     <Link to={`/destinations/${id}/memories/${memoryId}/edit`}>
  //       <button>Edit</button>
  //     </Link>
  //   ) : null}
  //   {memory.username === user.username ? (
  //     <button onClick={handleDelete}>Delete</button>
  //   ) : null}
  // </div>

  return (
    <div>
    <div className="px-4 sm:px-0">
      <h3 className="text-base font-semibold leading-7 text-gray-900">{memory.username}'s Memory</h3>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
    </div>
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">User</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{memory.username}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Rating</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{memory.rating}⭐️</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Date</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{memory.date}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Cost</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${memory.cost}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Review</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{memory.review}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Experiences</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{memory.experiences}</dd>
        </div>

      </dl>
    </div>
    {memory.username === user.username ? (
      <Link to={`/destinations/${id}/memories/${memoryId}/edit`}>
        <button>Edit</button>
      </Link>
    ) : null}
    {memory.username === user.username ? (
      <button onClick={handleDelete}>Delete</button>
    ) : null}
  </div>
  );
};

export default Memory;
