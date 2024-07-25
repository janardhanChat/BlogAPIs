const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5050;
const blogRoute = require("./routes/blog.route");
const userRoute = require("./routes/user.route");
const cookieParser = require("cookie-parser");
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
//routes
app.use("/api/v1/blogs", blogRoute);
//user routes
app.use("/api/v1/user" ,userRoute )



mongoose
  .connect("mongodb://127.0.0.1:27017/BlogCRUD")
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log("Server is running on port 5050");
    });
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
    console.log("Connection failed!");
  });
