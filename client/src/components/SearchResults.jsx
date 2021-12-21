import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/searchresults.css'


const SearchResults = () => {

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [rideList, setRideList] = useState([])
    const [location, setLocation] = useState('')
    const [pace, setPace] = useState("")

    const saveLocation = (e) => {
        setLocation(e.target.value)
    }

    const savePace = (e) => {
        setPace(e.target.value)
    }


    const handleSearch = (event) => {
    }

    useEffect(() => {
        axios('http://localhost:3001/api/v1/rides')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);


    const getRide = async () => {
        const res = await axios.get(
            'http://localhost:3001/api/v1/rides'
        )
        setRideList(res.data.rides)

    }

    useEffect(() => {
        getRide()
    }, [])


    return (
        <div>
            <div>
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
            </div>
            <h1>Group rides you can join:</h1>
            <div>{rideList.map(ride => (
                <li key={ride._id}>
                    <h2>{ride.title}</h2>
                    <h4>{ride.description}</h4>
                    <h4>{ride.location}</h4>
                    <h4>{ride.pace}</h4>
                    <h4>{ride.who}</h4>
                    <h4>{ride.when}</h4>
                </li>
            ))}
            </div>



        </div>
    )
}

export default SearchResults
