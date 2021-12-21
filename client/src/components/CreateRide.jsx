import React, { useState } from 'react'
import '../styles/Validator.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const CreateRide = () => {

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [pace, setPace] = useState("")
    const [alert, setAlert] = useState("")
    const [who, setWho] = useState("")
    const [when, setWhen] = useState("")

    const saveTitle = (e) => {
        setTitle(e.target.value)
    }

    const saveLocation = (e) => {
        setLocation(e.target.value)
    }

    const saveDescription = (e) => {
        setDescription(e.target.value)
    }

    const savePace = (e) => {
        setPace(e.target.value)
    }

    const saveWho = (e) => {
        setWho(e.target.value)
    }

    const saveWhen = (e) => {
        setWhen(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/api/v1/rides',
            {
                title,
                description,
                who,
                location,
                pace,
                when
            }).then(() => {
                setTitle('')
                setDescription('')
                setWho('')
                setLocation('')
                setPace('')
                setWhen('')
                alert('Your ride has successfully been submitted!')
            })
    }

    // if (title === "") {
    //     setAlert('Please enter a title for your ride')
    // } else if (description.length < 20) {
    //     setAlert("Please enter a longer desciprion")
    //     console.log(description.length)
    // } else {
    //     console.log('this ride has been submitted')
    // }


    return (
        <div className="form">
            <h1>Add Your Ride</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    placeholder="Give your ride a name."
                    id="title"
                    onChange={saveTitle}
                />
                <label htmlFor="Ride Name">Give your ride a name.</label>

                <input
                    type="text"
                    value={description}
                    placeholder="Describe your ride."
                    id="description"
                    onChange={saveDescription}
                />
                <label htmlFor="description">Description</label>

                <input
                    type="text"
                    value={who}
                    placeholder="Who is this ride for?"
                    id="who"
                    onChange={saveWho}
                />
                <label htmlFor="who">Who should join?</label>

                <div className="dropdowns">
                    <h5 htmlFor="city">City:</h5>
                    <select
                        value={location}
                        name="location"
                        id="location"
                        onChange={saveLocation}>
                        <option value="NYC">NYC</option>
                        <option value="ATL">ATL</option>
                        <option value="LA">LA</option>
                    </select>

                    <h5 htmlFor="pace">Pace:</h5>
                    <select
                        value={pace}
                        name="pace"
                        id="pace"
                        placeholder="pace"
                        onChange={savePace}>
                        <option value="party">party pace</option>
                        <option value="medium">medium pace</option>
                        <option value="race">race pace</option>
                    </select>

                </div>
                <label htmlFor="start">Start date:</label>

                <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value="2021-12-23"
                    min="2021-01-01"
                    max="2024-12-31"
                    onChange={saveWhen}>
                </input>

                <button type="submit" >Create Ride</button>
                <p>{alert}</p>
            </form>
        </div>
    )
}

export default CreateRide
