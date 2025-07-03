const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sd5:SD5-123@rg.chrbsm4.mongodb.net/?retryWrites=true&w=majority&appName=rg', {
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

const Uncomplete = mongoose.model("Apply_uncomplete", leaveSchema);
const Complete = mongoose.model("Apply_complete", applySchema);

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
