const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const orderSchema = mongoose.Schema(
  {
    orderitems: [{ type: ObjectId, ref: "OrderItems" }],
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

// order post json example

// {
//   "orderItems" : [
//       {
//           "quantity": 3,
//           "product" : "Orange"
//       },
//       {
//           "quantity": 2,
//           "product" : "Banana"
//       }
//   ],
//   "phone": "+8801782638193"
// }
