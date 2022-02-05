const express = require("express");
const mongoose = require("mongoose");
// db config
const db = require("./config/keys").mongoURI;
const user = require("./routes/api/user");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

mongoose
  .connect(db)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

//using routes
app.use('/api/user', user)
app.use('/api/posts', posts)
app.use('/api/profile', profile)



// creating a route using .get
app.get("/", (req, res) => res.send("hello"));
// here .get has 2 parameters path and callback function with 2 parameter request and response


app.get('/api/user',(req,res) => res.send("welcome to user"))

const port = process.env.PORT || 3090;
app.listen(port, () => console.log(`running on port ${port}`));
// .listen to listen on the port we are assigning
