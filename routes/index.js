const router = require('express').Router()
const spanishClassRouter = require('./spanishClass')
const vocabularyLanguageRouter = require('./vocabularyLanguage')
const blogRouter = require('./blog')
const userRouter = require('./user')

const {authenticate} = require('../middlewares/auth')

router.use(userRouter)
router.use(authenticate)

router.use(spanishClassRouter)
router.use(vocabularyLanguageRouter)
router.use(blogRouter)

module.exports = router