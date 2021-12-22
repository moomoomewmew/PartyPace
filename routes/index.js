const { Router } = require('express');
const userControllers = require('../controllers/userscontroller.js')

const router = Router();

router.post('/', userControllers.createUser)

router.get('/', userControllers.getAllUsers)

router.get('/:username', userControllers.getUserByUsername)

router.put('/:id', userControllers.updateUser)

router.delete('/:id', userControllers.deleteUser)

module.exports = router;
