const express = require("express");
const app = express();
const postRoutes = require("./routes/post");
const morgan = require("morgan");

//MIddleware

app.use(morgan("dev"));

app.use("/", postRoutes);

const port = 8080;

app.listen(port, () => {
  console.log(`A Node JS API is listening on port: ${port}`);
});
