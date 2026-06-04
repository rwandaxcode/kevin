const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },

  serviceType: {
    type: String,
    required: true,
  },

  maintenanceCost: {
    type: Number,
    required: true,
  },

  maintenanceDate: {
    type: String,
    required: true,
  },

  vehicleStatus: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Maintenance", maintenanceSchema);
