const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const { mongoURI } = require("./config/keys");

/* Load user model */
const User = require("./model/User");

/* Set port */
const PORT = process.env.PORT || require("./config/keys").port;

/* Require routes files */
const users = require("./routes/users");
//const posts = require("./routes/posts");
const chats = require("./routes/chats");

/* Create express app */
const app = express();

/* Bodyparser middleware */
app.use(express.json());

/* Module for Cross Origin Resource */
app.use(cors());

/* Mongodb connection */
mongoose.connect(mongoURI, (err) => {
  if (err) throw err;
  console.log("MongoDB connection established");
});

/* Initialize frontend directory */
app.use(express.static(path.join(__dirname, "public")));

/* Routes */
app.use("/users", users);
app.use("/chats", chats);

/* Send view file to client */
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./index.html"));
// });

/* Start server */
const server = app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});

// const io = socketio(server);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});
/* Start socket io */
io.on("connection", (socket) => {
  /* When user is online */
  socket.on("online", (userId) => {
    User.updateOne({ _id: userId }, { isOnline: true }, (err, res) => {
      if (err) throw err;
      socket.broadcast.emit("online", userId);
    });
  });
  /* When user is offline */
  socket.on("offline", (userId) => {
    User.updateOne({ _id: userId }, { isOnline: false }, (err, res) => {
      if (err) throw err;
      socket.broadcast.emit("offline", userId);
    });
  });
  /* When user send message */
  socket.on("send-message", (msg) => {
    socket.broadcast.emit("message", msg);
  });
});
