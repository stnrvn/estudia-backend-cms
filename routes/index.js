const router = require('express').Router()
const spanishClassRouter = require('./spanishClass')
const vocabularyLanguageRouter = require('./vocabularyLanguage')
const blogRouter = require('./blog')
const userRouter = require('./user')
const paymentRouter = require('./payment')
const uploadRouter = require('./upload')

const {authenticate} = require('../middlewares/auth')

router.use(paymentRouter)
router.use(userRouter)
// router.use(uploadRouter)
router.use(blogRouter)
router.use(vocabularyLanguageRouter)
router.use(authenticate)

router.use(spanishClassRouter)

module.exports = router