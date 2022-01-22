const router = require('express').Router()

const spanishClassController = require('../controllers/spanishClassController.js')
const uploadImage = require('../helpers/uploadImage')

router.get('/spanish-class', spanishClassController.get)
router.get('/spanish-class/:id', spanishClassController.getById)
router.post('/spanish-class', uploadImage.upload, spanishClassController.create)
router.put('/spanish-class/:id', spanishClassController.update)
router.delete('/spanish-class/:id', spanishClassController.delete)

module.exports = router