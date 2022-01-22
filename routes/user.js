const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/user', userController.get)
router.get('/user/:id', userController.getById)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

module.exports = router