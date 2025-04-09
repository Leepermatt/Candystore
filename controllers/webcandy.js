"use strict";

const candyModel = require("../models/candy.model");

// Define controller object
const candyController = {};

// Retrieve all candy items with optional filtering
candyController.getAllCandy = async (req, res) => {
  try {
    const query = {};

    if (req.query.name) {
      query.name = new RegExp(req.query.name, "i");
    }
    if (req.query.description) {
      query.description = new RegExp(req.query.description, "i");
    }
    if (req.query.container) {
      query.shipping_container = req.query.container;
    }

    const result = await candyModel.find(query);

    if (result.length === 0) {
      return res.status(404).render("candyList", { candyList: [], message: "No matching candy items found." });
    }

    res.status(200).render("candyList", { candyList: result, message: null });
  } catch (err) {
    console.error("Error fetching all candy:", err);
    res.status(500).render("candyList", {
      candyList: [],
      message: "Failed to retrieve candy items",
    });
  }
};

// Export the controller
module.exports = candyController;
