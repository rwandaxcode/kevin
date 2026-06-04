const express = require("express");

const Vehicle = require("../models/Vehicle");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);

    await vehicle.save();

    res.json({
      message: "Vehicle added successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();

    res.json(vehicles);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
