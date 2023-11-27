import React, { useState } from "react";
import axios from "axios";

function App() {
  const [command, setCommand] = useState("");

  const sendCommand = async () => {
    try {
      await axios.post("http://localhost:3000/control", { command });
      console.log("Command sent successfully");
    } catch (error) {
      console.error("Error sending command:", error.message);
    }
  };

  return (
    <div>
      <h1>Serial Communication with React and Express</h1>
      <label>
        Enter Command:
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
      </label>
      <button type="button" onClick={sendCommand}>
        Send Command
      </button>
    </div>
  );
}

export default App;
