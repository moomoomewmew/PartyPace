const { Router } = require('express');
const userControllers = require('../controllers/usersDAO.js')

const router = Router();

router.post('/', userControllers.createUser)

router.get('/', userControllers.getAllUsers)

router.get('/:id', userControllers.getUserById)

router.put('/:id', userControllers.updateUser)

router.delete('/:id', userControllers.deleteUser)

module.exports = router;
