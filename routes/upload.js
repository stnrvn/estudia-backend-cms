const router = require('express').Router()

const uploadController = require('../controllers/uploadController.js')
const multiparty = require('connect-multiparty');

const MuiltiPartyMiddleware = multiparty({uploadDir:"../images"});

router.post('/upload', MuiltiPartyMiddleware, uploadController.upload)

module.exports = router