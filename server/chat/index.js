module.exports = function(io) {
  let users = [];
  io.on("connection", socket => {
    socket.on("login", username => {
      users.push({
        username,
        id: socket.id
      });

      io.emit("users", users);
    });
    // console.log("Connection received: ", socket.id);

    socket.on("message", message => {
      io.emit("message", message);
    });

    io.emit("message", "test");

    socket.on("disconnect", () => {
      users = users.filter(user => user.id !== socket.id);
      console.log("Disconnected");
    });
  });
};
