const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },

  tripDate: {
    type: String,
    required: true,
  },

  destination: {
    type: String,
    required: true,
  },

  driverAssigned: {
    type: String,
    required: true,
  },

  fuelConsumed: {
    type: Number,
    required: true,
  },

  tripCost: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Trip", tripSchema);
