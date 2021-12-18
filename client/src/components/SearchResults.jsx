import React, { useState, useEffect } from 'react'
import axios from 'axios'


const SearchResults = () => {

    const [ride, setRide] = useState([])

    // const handleChange = (e) => {
    //     console.log(e.target.value)
    // }

    useEffect(() => {
        getRide()
        // showReviews(ride)

    }, [])

    const getRide = async () => {
        const res = await axios.get(
            'http://localhost:3001/api/v1/rides'
        )
        console.log(res.data.rides)
        // let currentReviews = res.data.reviews.filter((rideReview) => rideReview.name === res.data.ride.name)
        // setRide(currentReviews)
    }


    return (
        <div>
        </div>
    )
}

export default SearchResults
