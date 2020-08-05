const express = require("express");
const postRoutes = require("../controllers/controllerPosts");

const router = express.Router();

router.get("/", postRoutes);

module.exports = router;
