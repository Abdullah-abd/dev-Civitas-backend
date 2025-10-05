// socketHandler.js
export function handleSocketConnection(socket, io) {
  console.log("Socket handler initialized for:", socket.id);

  // Example: listen for a test event
  socket.on("testMessage", (msg) => {
    console.log("Received from client:", msg);
    socket.emit("testResponse", "Message received!");
  });
}
