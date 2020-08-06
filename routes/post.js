const express = require("express");
const postRoutes = require("../controllers/controllerPosts");

const router = express.Router();

router.get("/", postRoutes.getPosts);
router.post("/post", postRoutes.createPost);

module.exports = router;
