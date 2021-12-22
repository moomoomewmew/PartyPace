import React from 'react'
import SearchResults from './SearchResults'
export default function LandingPage(props) {
    return (
        <div>
            <SearchResults setRide={props.setRide} />
        </div>
    )
}
