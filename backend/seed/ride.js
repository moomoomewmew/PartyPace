const db = require('../db')
const ride = require('../models/rides.js')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const ridesMain = async () => {
    const ridesData = [
        {
            title: 'M+M',
            location: 'LA',
            description: 'No-drop social ride, party pace. Weear your helmets! This is not a race!',
            pace: 'party-pace',
            who: 'This ride is for anyone with a bike who isnt trying to race.',
            when: 'Every Monday!'
        },
        {
            title: 'Dope Peddlers',
            location: 'ATL',
            description: 'No-drop social ride, party pace. Weear your helmets! This is not a race!',
            pace: 'party-pace',
            who: 'This ride is for anyone with a bike who isnt trying to race.',
            when: 'Every Monday!'
        },
        {
            title:  
            location: 'NYC',
            description: 'No-drop social ride, party pace. Weear your helmets! This is not a race!',
            pace: 'party-pace',
            who: 'This ride is for anyone with a bike who isnt trying to race.',
            when: 'Every Monday!'
        },
        {
            id: 0, 
            location: 'LA',
            description: 'No-drop social ride, party pace. Weear your helmets! This is not a race!',
            pace: 'party-pace',
            who: 'This ride is for anyone with a bike who isnt trying to race.',
            when: 'Every Monday!'
        },
        {
            title: 'The Race Ride'
            location: 'ATL',
            description: 'No-drop social ride, party pace. Weear your helmets! This is not a race!',
            pace: 'Race-pace',
            who: 'This ride is for anyone with a bike who isnt trying to race.',
            when: 'Every Monday!'
        },
        {
            title: 'The Fun Ride'
            location: 'NYC',
            description: 'No-drop social ride, party pace. Weear your helmets! This is not a race!',
            pace: 'party-pace',
            who: 'This ride is for anyone with a bike who isnt trying to race.',
            when: 'Every Monday!'
        }

    ]

    await ride.insertMany(ridesData)
    console.log("Created some rides!")
}

const run = async () => {
    await ridesMain()
    db.close()
}

run()