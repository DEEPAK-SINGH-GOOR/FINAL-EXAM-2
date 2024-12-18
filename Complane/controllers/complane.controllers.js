const complane = require("../model/complane.model");

const createcomplane = async (req, res) => {
  try {
    req.body.user = req.user.id;
    let complane = await complane.create(req.body);
    res.send(complane);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
const updatecomplane = async (req, res) => {
  let { complaneId } = req.params;
  try {
    let complane = await complane.findByIdAndUpdate(complaneId, req.body, {
      new: true,
    });
    res.send(complane);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
const deletecomplane = async (req, res) => {
  let { complaneId } = req.params;

  try {
    let complane = await complane.findByIdAndDelete(complaneId);
    res.send(complane);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  createcomplane,
  updatecomplane,
  deletecomplane,
};