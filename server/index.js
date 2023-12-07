const express = require("express");
const cors = require("cors");
const { sendCommand } = require("./models/controlCommand");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.post("/control", (req, res) => {
  const command = req.body.command;
  console.log("Command:", command);
  sendCommand(command);
  res.sendStatus(200);
});

const server = app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

process.on("SIGINT", () => {
  // Close your ports or any cleanup needed
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
