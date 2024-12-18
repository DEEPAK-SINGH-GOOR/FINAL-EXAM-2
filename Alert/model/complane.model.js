const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  user: { type: String, required: true },
  submissionTime: { type: Date, required: true },
  notificationTime: { type: Date, required: true },
  status: { type: String, default: 'scheduled' }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;