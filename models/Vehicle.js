const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vehicleName: {
    type: String,
    required: true,
  },

  plateNumber: {
    type: String,
    required: true,
    unique: true,
  },

  model: {
    type: String,
    required: true,
  },

  fuelType: {
    type: String,
    required: true,
  },

  capacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
