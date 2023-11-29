import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from './UserComponents/UserContext';

const API = import.meta.env.VITE_API_URL;

const EditMemoryForm = () => {
    const navigate = useNavigate();
    const { id, memoryId } = useParams()
    const { user } = useAuth();
    const [memory, setMemory] = useState({
        travel_user_id: null,
        rating: 0,
        cost: 0,
        review: "",
        experiences: "",
        date: "",
    })

    useEffect(() => {
        console.log(user)
        if (user) {
            setMemory({ ...memory, travel_user_id: user.id });
        }
    }, [user]);

    const editMemory = () => {
        fetch(`${API}/destinations/${id}/memories/${memoryId}`, {
            method: "PUT",
            body: JSON.stringify(memory),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => {
            navigate(`/destinations/${id}/memories`)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    const handleTextChange = (event) => {
        setMemory({ ...memory, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editMemory()
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" alt="Edit Memory Page">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn.shopify.com/s/files/1/1372/9161/files/travel2.jpg?v=1670203277"
            alt="Edit Memory Image"
          />
  
        </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" alt="Form">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit Memory
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
  
          <div>
              <label
                htmlFor="destinationName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rating
              </label>
              <div className="mt-2">
                <input
                  id="rating"
                  name="rating"
                  type="text"
                  value={memory.rating}
                  onChange={handleTextChange}
                  autoComplete="rating"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
              <label
                htmlFor="cost"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cost
              </label>
              <div className="mt-2">
                <input
                  id="cost"
                  name="cost"
                  type="text"
                  onChange={handleTextChange}
                  value={memory.cost}
                  autoComplete="cost"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
              <label
                htmlFor="review"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Review
              </label>
              <div className="mt-2">
                <input
                  id="review"
                  name="review"
                  type="text"
                  onChange={handleTextChange}
                  value={memory.review}
                  autoComplete="review"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="experiences"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Experiences
              </label>
              <div className="mt-2">
                <input
                  id="experiences"
                  name="experiences"
                  type="text"
                  onChange={handleTextChange}
                  value={memory.experiences}
                  autoComplete="experiences"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="text"
                  onChange={handleTextChange}
                  value={memory.date}
                  autoComplete="date"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default EditMemoryForm;
