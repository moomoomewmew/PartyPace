import React from 'react'
import CreateAccount from './components/CreateAccount'
import CreateRide from './components/CreateRide'
import SearchResults from './components/SearchResults'

export default function Dashboard(props) {
    console.log('hello dashboard')
    console.log(props)
    return (
        <div>
            <CreateRide />
            <SearchResults setRide={props.setRide}/>
        </div>
    )
}
