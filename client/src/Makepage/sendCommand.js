const sendCommand = async (command) => {
  try {
    const response = await fetch("http://localhost:8000/control", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ command }),
    });

    if (response.ok) {
      console.log("Command sent successfully");
      return true;
    } else {
      console.error("Failed to send command");
      return false;
    }
  } catch (error) {
    console.error("Error sending command:", error);
    return false;
  }
};

export { sendCommand };
