const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

let messages = [];

app.get("/getmessage", (req, res) => {
  let messagenumber = Number(req.query.n);
  console.log(messagenumber);
  if (messagenumber > messages.length - 1 || messages.length < 1) {
    res.json({
      author: "n/a",
      message: "n/a",
    });
    return;
  }
  res.json({
    author: messages[messagenumber].author,
    message: messages[messagenumber].msg,
  });
});

app.get("/amount", (req, res) => {
  res.json({
    len: messages.length,
  });
});

app.post("/addpost", (req, res) => {
  let body = req.body;
  let author = body.author;
  let msg = body.msg;
  messages.push({ author, msg });
  res.json({ response: 200 });
});

app.get("/addmessage", (req, res) => {
  messages.push({ author: req.query.author, msg: req.query.msg });
  res.json({});
});

app.listen(3000);
