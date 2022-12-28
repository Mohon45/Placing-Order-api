const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const orderItemsSchema = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Product quantity can't be negative"],
  },
  order: {
    id: {
      type: ObjectId,
      ref: "Order",
    },
  },
});

const OrderItems = mongoose.model("OrderItems", orderItemsSchema);

module.exports = OrderItems;
