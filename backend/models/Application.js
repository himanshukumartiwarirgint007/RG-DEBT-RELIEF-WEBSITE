const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  countryCode: String,
  phone: String,
  state: String,
  debtAmount: String,
  typeOfDebt: [String],
  employmentStatus: String,
  monthlyIncome: String,
  source: String,
  status: String,
  notes: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", ApplicationSchema);