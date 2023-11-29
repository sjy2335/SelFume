const express = require("express");
const cors = require("cors");
const { SerialPort } = require("serialport");
// const Readline = require("@serialport/parser-readline");

const app = express();
const port1 = new SerialPort({ path: "COM7", baudRate: 9600 });
const port2 = new SerialPort({ path: "COM8", baudRate: 9600 });

// Don't need Parsing with arduino yet.
// const parser1 = port1.pipe(new Readline({ delimiter: "\n" }));
// const parser2 = port2.pipe(new Readline({ delimiter: "\n" }));

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.post("/control", (req, res) => {
  const command = req.body.command;
  console.log("Command:", command);
  sendCommand(command);
  res.sendStatus(200);
});

function sendCommand(command) {
  port1.write(command);
  port2.write(command);
}

const server = app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

process.on("SIGINT", () => {
  port1.close(() => {
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
    // port2.close(() => {
    //   server.close(() => {
    //     console.log("Server closed");
    //     process.exit(0);
    //   });
    // });
  });
});
