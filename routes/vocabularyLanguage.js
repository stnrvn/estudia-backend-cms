const router = require('express').Router()

const vocabularyLanguage = require('../controllers/vocabularyLanguage.js')

router.get('/vocabulary-language', vocabularyLanguage.get)
router.get('/vocabulary-language/:id', vocabularyLanguage.getById)
router.post('/vocabulary-language', vocabularyLanguage.create)
router.put('/vocabulary-language/:id', vocabularyLanguage.update)
router.delete('/vocabulary-language/:id', vocabularyLanguage.delete)

module.exports = router