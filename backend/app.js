const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const applyRoutes = require("./routes/applyRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/rgdebt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/apply", applyRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});