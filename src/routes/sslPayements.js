const express = require("express");
const router = express.Router();
const { sslPayment } = require("../controllers/SSLCommerzPayment");

router.post("/ssl", sslPayment);

module.exports = router;