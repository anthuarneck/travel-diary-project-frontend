import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const NewDestinationForm = () => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState({
        destination_name: "",
        image_url: ""
    })

    const addDestination = () => {
        fetch(`${API}/destinations`, {
            method: "POST",
            body: JSON.stringify(destination),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => {
            navigate(`/destinations`);
        })
        .catch((error) => console.error(error))
    }

    const handleTextChange = (event) => {
        setDestination({ ...destination, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addDestination()
    }


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" alt="New Destination Page">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src=""
            alt="Travel Diary"
          />
  
        </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" alt="Form">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add Destination
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
  
          <div>
              <label
                htmlFor="destination_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Destination Name
              </label>
              <div className="mt-2">
                <input
                  id="destination_name"
                  name="destination_name"
                  type="text"
                  value={destination.destination_name}
                  onChange={handleTextChange}
                  autoComplete="destination_name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
              <label
                htmlFor="image_url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image URL
              </label>
              <div className="mt-2">
                <input
                  id="image_url"
                  name="image_url"
                  type="text"
                  onChange={handleTextChange}
                  value={destination.image_url}
                  autoComplete="image_url"
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

export default NewDestinationForm;
