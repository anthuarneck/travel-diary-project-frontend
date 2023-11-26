import React from 'react';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const EditDestinationForm = () => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState({
        destination_name: "",
        image_url: ""
    })

    const { id } = useParams()

    const editDestination = () => {
        fetch(`${API}/destinations/${id}`, {
            method: "PUT",
            body: JSON.stringify(destination),
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
        setDestination({ ...destination, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editDestination()
    }

    return (
        <div className='editDestination'>
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

export default EditDestinationForm;
