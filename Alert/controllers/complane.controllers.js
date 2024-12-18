const Alert = require("../model/complane.model");

const createAlert = async (req, res) => {
  const notificationTime = new Date();
  notificationTime.setHours(11, 50, 0, 0);

  const alert = await Alert.create({ user: req.body.user, submissionTime: new Date(), notificationTime });
  res.json({ message: "Alert scheduled", alert });
};

module.exports = { createAlert };
