module.exports = function(io) {
  io.on("connection", socket => {
    console.log("Connection received: ", socket.id);

    socket.on("message", message => {
      io.emit("message", message);
    });

    io.emit("message", "test");

    socket.on("disconnect", () => {
      console.log("Tearing down");
    });
  });
};
