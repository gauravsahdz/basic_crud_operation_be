const Vendor = require("../models/vendor.mo.js");

const createVendor = async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).send(vendor);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.send(vendors);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).send("Vendor not found");
    }
    res.send(vendor);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!vendor) {
      return res.status(404).send("Vendor not found");
    }
    res.send(vendor);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      return res.status(404).send("Vendor not found");
    }
    res.send(vendor);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createVendor,
  getVendors,
  getVendor,
  updateVendor,
  deleteVendor,
};
