const { SerialPort } = require("serialport");

const port1 = new SerialPort({ path: "COM7", baudRate: 9600 });
const port2 = new SerialPort({ path: "COM8", baudRate: 9600 });

function sendCommand(command) {
  port1.write(command);
  port2.write(command);
}

module.exports = {
  sendCommand,
};
