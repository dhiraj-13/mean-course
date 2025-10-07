const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS"
  );
  next();
});

// app.use((req, res, next) => {
//   console.log("something something");
// //   next();
// });

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message:'Post Added Successfully'
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "sdssd",
      title: "This is title 1",
      content: "something something cominf from node",
    },
    {
      id: "werrwer",
      title: "This is title 3",
      content: "anothterthing another thing cominf from node",
    },
  ];
  res.status(200).json({
    message: "Fetched Data Successfully!",
    posts: posts,
  });
  //   next();
});

module.exports = app;
