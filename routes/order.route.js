const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router.route("/order/:id").get(orderController.getOrder);
router.route("/order").post(orderController.createOrder);

module.exports = router;
