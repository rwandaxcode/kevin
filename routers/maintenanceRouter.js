const express = require("express");

const Maintenance = require("../models/Maintenance");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const maintenance = new Maintenance(req.body);

    await maintenance.save();

    res.json({
      message: "Maintenance added successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const maintenance = await Maintenance.find().populate("vehicle");

    res.json(maintenance);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    await Maintenance.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      message: "Maintenance updated successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await Maintenance.findByIdAndDelete(req.params.id);

    res.json({
      message: "Maintenance deleted successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.get("/fleet-report", async (req, res) => {
  try {
    const report = await Maintenance.find().populate("vehicle");

    res.json(report);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
