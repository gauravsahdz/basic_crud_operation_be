const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
  bankAccountNo: {
    type: String,
    required: true,
    unique: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  location: {
    addressLine1: String,
    addressLine2: {
      type: String,
      default: "",
      required: true,
    },
    city: String,
    country: String,
    zipCode: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("Vendor", vendorSchema);
