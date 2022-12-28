const {
  getOrderService,
  createOrderService,
} = require("../services/order.services");

exports.getOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await getOrderService(id);

    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    // save or create

    const result = await createOrderService(req.body);

    res.status(200).json({
      status: "success",
      messgae: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};
