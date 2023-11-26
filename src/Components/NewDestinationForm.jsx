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
        <div className='newDestination'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input
                id="destination_name"
                value={destination.destination_name}
                onChange={handleTextChange}
                type='text'
                placeholder='Name of Destination'
                required
                />
                <br />
                <label htmlFor='image'>Image URL:</label>
                <input
                id="image_url"
                value={destination.image_url}
                onChange={handleTextChange}
                type='text'
                placeholder='Enter Image URL'
                />
                <br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default NewDestinationForm;
