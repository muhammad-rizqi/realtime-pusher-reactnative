// npm i express body-parser pusher
// sudo npm i nodemon

// untuk start
//nodemon app.js

const express = require("express");
const bodyparser = require("body-parser");
const Pusher = require("pusher");

const app = express();
const port = 3000;

app.listen(port, () => console.log("Server Started at : " + port));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// key dari backend
const pusher = new Pusher({
  appId: "1100596",
  key: "5d9a85133f31dbf94b8a",
  secret: "b2f80b04901de00d23bc",
  cluster: "ap1",
  useTLS: true,
});

// data sementara kayak state
let data = [];

app.post("/message", (req, res) => {
  // masukin data ke array
  data.push({
    username: req.body.username,
    message: req.body.message,
  });

  // ngirim data ke client
  pusher.trigger("my-channel", "my-event", {
    data: data,
  });

  //respon ke client
  res.json({
    success: "updated",
    message: req.body.message,
  });
});
