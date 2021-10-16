const { getPosts, createPosts } = require("../controllers/post");
const { postValidator } = require("../validators/postValidator");
const express = require("express");
const router = express.Router();

router.get("/", getPosts);
router.post("/post", postValidator, createPosts);

module.exports = router;
