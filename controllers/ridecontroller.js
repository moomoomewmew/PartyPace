const Ride = require('../models/rides.js');

const createRide = async (req, res) => {
    try {
        const ride = await new Ride(req.body)
        await ride.save()
        return res.status(201).json({
            ride,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllRides = async (req, res) => {
    const location = req.query.location
    const pace = req.query.pace
    let query = {}
    if (location) query.location = location
    if (pace) query.pace = pace
    console.log(req.query)
    if (Object.keys(query).length !== 0) {
        query = Ride.find(query)
    } else {
        query = Ride.find()
    }
    try {
        const rides = await query
        return res.status(200).json({ rides }) ///and if (if thing is present, await ride.find and pass in object link from chat to mongoose doc)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRideById = async (req, res) => {
    try {
        const { id } = req.params;
        const ride = await Ride.findById(id)
        if (ride) {
            return res.status(200).json({ ride });
        }
        return res.status(404).send('Ride with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRideByLocation = async (req, res) => {
    try {
        const { location } = req.params;
        const ride = await Ride.find(location)
        if (ride) {
            return res.status(200).json({ ride });
        }
        return res.status(404).send('Ride with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const updateRide = async (req, res) => {
    console.log('updating ride:', req.params.id)
    const { id } = req.params;
    console.log('executing query')
    Ride.findByIdAndUpdate(id, req.body, (err, ride) => {
        console.log('updated')
        if (err) {
            console.log('returning from error')
            return res.status(500).send(err);
        }
        if (!ride) {
            console.log('returning from not found')
            return res.status(500).send('Ride not found!');
        }
        console.log('returning json')
        return res.status(200).json(ride);
    })
}

const deleteRide = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Ride.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Ride deleted");
        }
        throw new Error("Ride not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createRide,
    getAllRides,
    getRideById,
    updateRide,
    deleteRide,
    getRideByLocation
}