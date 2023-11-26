import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "./UserComponents/UserContext";

const API = import.meta.env.VITE_API_URL;

const NewMemoryForm = () => {
    const { id } = useParams()
    const navigate = useNavigate()
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

    const addMemory = () => {
        fetch(`${API}/destinations/${id}/memories`, {
            method: "POST",
            body: JSON.stringify(memory),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => {
            console.log(user)
            console.log(memory)
            navigate(`/destinations/${id}/memories`)
        })
        .catch((error) => console.error(error))
    }

    const handleTextChange = (event) => {
        setMemory({ ...memory, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addMemory()
    }

    return (
        <div className='newMemory'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="rating">Rating:</label>
                <input 
                id="rating"
                value={memory.rating}
                type="number"
                onChange={handleTextChange}
                placeholder='Destination Rating'
                required
                />
                <label htmlFor='cost'>Cost:</label>
                <input
                id='cost'
                value={memory.cost}
                type='number'
                onChange={handleTextChange}
                placeholder='Cost of Trip'
                required
                />
                <label htmlFor='review'>Review:</label>
                <input
                id='review'
                value={memory.review}
                type='text'
                onChange={handleTextChange}
                placeholder='Review your Experience'
                />
                <label htmlFor='experiences'>Experiences:</label>
                <input
                id='experiences'
                value={memory.experiences}
                type='text'
                onChange={handleTextChange}
                placeholder='Tell us about your Experiences'
                />
                <label htmlFor='date'>Date:</label>
                <input
                id='date'
                value={memory.date}
                type='text'
                onChange={handleTextChange}
                placeholder='When did you go?'
                />
                <br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default NewMemoryForm;
