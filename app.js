const express = require("express");
const app = express();
const postRoutes = require("./routes/post");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//MIddleware
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("Mongo DB Conneced successfully"));

mongoose.connection.on("error", (err) => {
  console.log(`DB Connection error:${err.message}`);
});

app.use(morgan("dev"));
app.use("/", postRoutes);
const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`A Node JS API is listening on port: ${port}`);
});
