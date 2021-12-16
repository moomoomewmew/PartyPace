const { Router } = require('express');
const userControllers = require('../controllers/usersDAO.js')
const rideControllers = require('../controllers/ridesDAO.js')

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/users', userControllers.createUser)

router.get('/users', userControllers.getAllUsers)

router.get('/users/:id', userControllers.getUserById)

router.put('/users/:id', userControllers.updateUser)

router.delete('/users/:id', userControllers.deleteUser)

router.get('/', (req, res) => res.send('This is root!'))

router.post('/rides', rideControllers.createRide)

router.get('/rides', rideControllers.getAllRides)

router.get('/rides/:id', rideControllers.getRideById)

router.put('/rides/:id', rideControllers.updateRide)

router.delete('/rides/:id', rideControllers.deleteRide)

module.exports = router;
