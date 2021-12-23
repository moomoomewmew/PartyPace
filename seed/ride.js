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
            who: 'Atlanta community, everyone is welcome.',
            when: 'Every Saturday!'
        },
        {
            title: 'Coffee Sunday',
            location: 'NYC',
            description: 'Grabbing coffee on sun mornings!',
            pace: 'party-pace',
            who: 'Coffee Lovers and morning people',
            when: 'Every Sunday!'
        },
        {
            title: 'Fitness Friday', 
            location: 'LA',
            description: 'We are taking a medium pace. There is no sweep. Come if you can keep up!',
            pace: 'medium-pace',
            who: 'This is for anyone that wants to get fit with this friday group ride.',
            when: 'Every Friday!'
        },
        {
            title: 'The Race Ride',
            location: 'ATL',
            description: 'No-drop social ride, party pace. Weear your helmets! This is not a race!',
            pace: 'race-pace',
            who: 'This ride is for fast people.',
            when: 'Every Saturday!'
        },
        {
            title: 'The Fun Ride',
            location: 'NYC',
            description: 'No-drop social ride, party pace. Weear your helmets!',
            pace: 'party-pace',
            who: 'This ride is for anyone who likes to have fun.',
            when: 'Every Saturday!'
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