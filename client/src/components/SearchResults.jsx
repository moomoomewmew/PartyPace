import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/searchresults.css'
import { useNavigate } from 'react-router-dom'



const SearchResults = (props) => {

    console.log(props)
    const navigate = useNavigate()
    const setRide = props.setRide

    const [allData, setAllData] = useState([])
    const [filteredData, setFilteredData] = useState(allData)
    const [rideList, setRideList] = useState([])
    const [location, setLocation] = useState('')
    const [pace, setPace] = useState("")
    const [filters, setFilters] = useState({})

    const saveLocation = async (e) => {
        setLocation(e.target.value)
        updateFilters({ location: e.target.value })
    }

    const savePace = (e) => {
        setPace(e.target.value)
        updateFilters({ pace: e.target.value })
    }

    const updateFilters = async (newFilters) => {
        console.log(newFilters)
        let mergedFilters = { ...filters, ...newFilters }
        
        for (let [filter, value] of Object.entries(mergedFilters)) {
            if (value === '-') {
                delete mergedFilters[filter]
            }
        }

        console.log(mergedFilters)
        const res = await axios.get(`/api/v1/rides`, {
            params: mergedFilters
        })
        setRideList(res.data.rides)
        setFilters(mergedFilters)
    }

    const handleSearch = (event) => {
    }

    const deleteRide = async (e) => {
        const res = await axios.delete(
            `/api/v1/rides/${e.target.id}`)
        getRide()
    }

    const editRide = async (e) => {
        e.preventDefault()
        const rideId = e.target.id;
        const res = await axios.get(`/api/v1/rides/${rideId}`)
        setRide(res.data.ride)
        navigate('/edit')
    }

    const getRide = async () => {
        const res = await axios.get(
            '/api/v1/rides'
        )
        setRideList(res.data.rides)
        setLocation('-')
        setPace('-')
        setFilters({})
    }

    useEffect(() => {
        getRide()
    }, [])


    return (
        <div>
            <div>
                <div className="dropdowns">
                    <h3>Where would you like to ride, and how fast?</h3>
                    <h5 htmlFor="city">City:</h5>
                    <select
                        value={location}
                        name="location"
                        id="location"
                        onChange={saveLocation}>
                        <option value="-">-</option>
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
                        <option value="-">-</option>
                        <option value="party-pace">party pace</option>
                        <option value="medium-pace">medium pace</option>
                        <option value="race-pace">race pace</option>
                    </select>
                </div>
            </div>
            <h1>Group rides you can join:</h1>
            <div>{rideList.map(ride => (
                <li key={ride._id}>
                    <h2>{ride.title}</h2>
                    <h3>What is this ride all about?</h3>
                    <h4>{ride.description}</h4>
                    <h3>Where are we going?</h3>
                    <h4>{ride.location}</h4>
                    <h3>What pace will we go?:</h3>
                    <h4>{ride.pace}</h4>
                    <h3>Who will be there?</h3>
                    <h4>{ride.who}</h4>
                    <h3>When is this ride?</h3>
                    <h4>{ride.when}</h4>
                    <button id={ride._id} onClick={(e) => deleteRide(e)}>Delete</button>
                    <button id={ride._id} onClick={(e) => editRide(e)}>Edit</button>
                </li>
            ))}
            </div>



        </div>
    )
}

export default SearchResults
