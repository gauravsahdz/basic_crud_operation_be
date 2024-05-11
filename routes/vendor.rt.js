const vendorController = require("../controllers/vendor.ct.js");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(vendorController.getVendors)
  .post(vendorController.createVendor);

router
  .route("/:id")
  .get(vendorController.getVendor)
  .patch(vendorController.updateVendor)
  .delete(vendorController.deleteVendor);

module.exports = router;
