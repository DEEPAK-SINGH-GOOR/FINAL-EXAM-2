const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db");
const complaneRouter = require("./routes/complane.routes"); 

const app = express();
const PORT = process.env.PORT || 8090;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("WELCOME TO Google class room ");
});

app.use("/complane", complaneRouter);


app.listen(PORT, async () => {
  console.log("Server is running on port");
  await connectDb();
});