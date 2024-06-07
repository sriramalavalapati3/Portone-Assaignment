const express = require('express');
const router = express.Router();
const paymentController = require('../../controllers/paymentContollers');   // importing controller functions from controllers
const { validatePaymentIntent, validateIdParam } = require('../../middleware/validation');  // importing validation middleware


router.post('/create_intent', validatePaymentIntent, paymentController.createPaymentIntent);  // route for creating payment intent
router.post('/capture_intent/:id', validateIdParam, paymentController.capturePaymentIntent);  //route for capturing payment intent
router.post('/create_refund/:id', validateIdParam, paymentController.createRefund);           //route for create refund
router.get('/get_intents', paymentController.listPaymentIntents);                             // route for getting all payment intents

module.exports = router;
