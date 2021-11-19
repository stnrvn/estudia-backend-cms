const router = require('express').Router()
const spanishClassRouter = require('./spanishClass')
const vocabularyLanguageRouter = require('./vocabularyLanguage')
const blogRouter = require('./blog')

router.use(spanishClassRouter)
router.use(vocabularyLanguageRouter)
router.use(blogRouter)

module.exports = router