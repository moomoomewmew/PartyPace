const db = require('../db')
const user = require('../models/plant')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const userMain = async () => {
    const userData = [
        {
            location: 'Meet at Augustine, ride for 13 miles, and land at the GA Baargarden',
            description: 'No-drop social ride, party pace. Weear your helmets! This is not a race!',
            pace: 'party-pace',
            who: 'This ride is for anyone with a bike who isnt trying to race.',
            when: 'Every Monday!'
        },
    ]

    await user.insertMany(userData)
    console.log("Created some plants!")
}
const run = async () => {
    await userMain()
    db.close()
}

run()