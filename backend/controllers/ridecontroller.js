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
    try {
        const rides = await Ride.find()
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
    try {
        const { id } = req.params;
        await Ride.findByIdAndUpdate(id, req.body, { new: true }, (err, ride) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!ride) {
                res.status(500).send('Ride not found!');
            }
            return res.status(200).json(ride);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
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