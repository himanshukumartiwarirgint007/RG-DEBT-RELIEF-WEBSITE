const express = require("express");
const router = express.Router();
const Apply = require("../models/Application");

router.post("/", async (req, res) => {
  try {
    const application = new Apply(req.body);
    await application.save();
    res.status(201).json({ message: "Application submitted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;