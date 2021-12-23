import React from 'react'
import CreateAccount from './components/CreateAccount'
import CreateRide from './components/CreateRide'
import SearchResults from './components/SearchResults'

export default function Dashboard(props) {
    console.log('hello dashboard')
    console.log(props)

    const user = props.user;

    if (user) {
        return (
            <div>
                <h3>Hello, {user.username} in {user.location}!</h3>
                <CreateRide />
                <SearchResults setRide={props.setRide}/>
            </div>
        )
    } else {
        return (
            <div>
                <CreateRide />
                <SearchResults setRide={props.setRide}/>
            </div>
        )
    }
}
