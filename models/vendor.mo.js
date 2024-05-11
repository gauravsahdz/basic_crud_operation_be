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
    validate: {
      validator: function (v) {
        return /^\d{16}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid account number!`,
    },
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
      unique: true,
      validate: {
        validator: function (v) {
          return /^\d{6}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid zip code!`,
      },
    },
  },
});

module.exports = mongoose.model("Vendor", vendorSchema);
