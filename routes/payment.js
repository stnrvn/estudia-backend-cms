const router = require('express').Router()

const paymentController = require('../controllers/paymentController.js')

// JANGAN LUPA router.get nya diganti jadi post, kalo udah ngabil transaction data dari fe
router.post('/payment-estudia', paymentController.snapTransactionToken)

module.exports = router