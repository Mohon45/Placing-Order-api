const Order = require("../models/Order");
const OrderItems = require("../models/OrderItems");

exports.getOrderService = async (id) => {
  const order = await Order.findOne({ _id: id }).populate("orderitems", {
    _id: 0,
    product: 1,
    quantity: 1,
  });

  return order;
};

exports.createOrderService = async (data) => {
  const order = await Order.create(data);
  const { _id: orderId } = order;

  for (item of data.orderItems) {
    item.order = { id: orderId };
    const itemRes = await OrderItems.create(item);

    const res = await Order.updateOne(
      { _id: orderId },
      { $push: { orderitems: itemRes } }
    );
  }

  console.log("all");

  // const
  // return product;
};
