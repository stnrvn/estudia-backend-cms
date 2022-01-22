const router = require('express').Router()

const blogController = require('../controllers/blogController.js')
const uploadImage = require('../helpers/uploadImage')

router.get('/blog', blogController.get)
router.get('/blog/:id', blogController.getById)
router.post('/blog', uploadImage.upload, blogController.create)
router.put('/blog/:id', blogController.update)
router.delete('/blog/:id', blogController.delete)

module.exports = router