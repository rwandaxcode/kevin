const express = require("express");

const Trip = require("../models/Trip");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const trip = new Trip(req.body);

    await trip.save();

    res.json({
      message: "Trip added successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find().populate("vehicle");

    res.json(trips);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.get("/daily-report", async (req, res) => {
  try {
    const trips = await Trip.find().populate("vehicle");

    res.json(trips);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
