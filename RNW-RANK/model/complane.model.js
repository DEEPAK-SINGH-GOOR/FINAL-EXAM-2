const mongoose = require("mongoose");
const complaneschema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  complane: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const complane = mongoose.model("complane", complaneschema);
module.exports = complane;