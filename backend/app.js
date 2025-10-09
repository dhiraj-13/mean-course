const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose
  .connect(
    "mongodb+srv://dhirajchhabria4598_db_user:qlC8WnbwCZp7jH2U@cluster0.23gqtjg.mongodb.net/node-angular?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected To Database!");
  })
  .catch(() => {
    console.log("Database Connection Failed");
  });
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
  console.log("request is", req);
  // const post = req.body;
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  post.save();
  res.status(201).json({
    message: "Post Added Successfully",
  });
});

// app.use("/api/posts", (req, res, next) => {
app.get("/api/posts", (req, res, next) => {
  // const posts = [
  //   {
  //     id: "sdssd",
  //     title: "This is title 1",
  //     content: "something something cominf from node",
  //   },
  //   {
  //     id: "werrwer",
  //     title: "This is title 3",
  //     content: "anothterthing another thing cominf from node",
  //   },
  // ];
  Post.find().then((documents) => {
    // console.log("document is", document);
    res.status(200).json({
      message: "Fetched Data Successfully!",
      posts: documents,
    });
  });
  // .catch( )

  //   next();
});

module.exports = app;
