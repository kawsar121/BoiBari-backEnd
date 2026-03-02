const express = require("express");
const router = express.Router();

const { stripePayment } = require("../controllers/paymentController");

router.post("/stripe", stripePayment);

module.exports = router;