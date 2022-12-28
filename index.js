const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const orderRoute = require("./routes/order.route");

// database connections
mongoose
  .connect(process.env.ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Route is working!");
});
app.use("/api/v1/", orderRoute);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

app.all("*", (req, res) => {
  res.send("No Route Found.");
});
