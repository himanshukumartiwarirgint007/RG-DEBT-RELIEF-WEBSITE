const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://RGdebtRelief:Admin123@rgdebtrelief.qyjunw9.mongodb.net/WebsiteData?retryWrites=true&w=majority&appName=RGDebtRelief', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// SCHEMA
const applySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  bestTimeToCall: String,
  consent: Boolean,
  state: String,
  city: String,
  zipCode: String,
  disclaimerConsent: Boolean,
}, { timestamps: true });

const leaveSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  bestTimeToCall: String,
  consent: Boolean,
}, { timestamps: true });

const contactUsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Uncomplete = mongoose.model("apply_incomplete", leaveSchema);
const Complete = mongoose.model("apply_complete", applySchema);
const ContactUs = mongoose.model("contact_us", contactUsSchema);

// Save partial data
app.post('/api/apply/partial', async (req, res) => {
  try {
    const data = req.body;
    const result = await Uncomplete.create(data);
    res.json({ message: 'Partial data saved', id: result._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save complete data
app.post('/api/apply', async (req, res) => {
  try {
    const data = req.body;
    await Complete.create(data);
    res.json({ message: 'Form fully submitted!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const contact = new ContactUs({ firstName, lastName, email, phone, message });
    await contact.save();
    res.json({ message: 'Contact form submitted!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
