const { Router } = require('express');
const rideControllers = require('../controllers/ridesDAO.js')
const router = Router();

router.post('/', rideControllers.createRide)

router.get('/', rideControllers.getAllRides)

router.get('/:id', rideControllers.getRideById)

router.put('/:id', rideControllers.updateRide)

router.delete('/:id', rideControllers.deleteRide)


module.exports = router;
