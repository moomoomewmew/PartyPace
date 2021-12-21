import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/searchresults.css'


const SearchResults = () => {

    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [rideList, setRideList] = useState([])

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
