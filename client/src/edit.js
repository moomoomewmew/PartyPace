import React from 'react'
import CreateAccount from './components/CreateAccount'
import CreateRide from './components/CreateRide'
import SearchResults from './components/SearchResults'

export default function EditPage(props) {
    return (
        <div>
            <EditPage ride={props.ride} />
        </div>
    )
}
