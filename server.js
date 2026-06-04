const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("./routers/authRouter");
const vehicleRouter = require("./routers/vehicleRouter");
const tripRouter = require("./routers/tripRouter");
const maintenanceRouter = require("./routers/maintenanceRouter");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: "swiftwheelsecret",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/FMS")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/auth", authRouter);
app.use("/vehicles", vehicleRouter);
app.use("/trips", tripRouter);
app.use("/maintenance", maintenanceRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
