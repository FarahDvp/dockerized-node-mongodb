const express = require("express");
const router = express.Router();
const PostController = require("../controllers/Post.controller");

router.get("/get-all-posts", PostController.getAllPosts);
router.get("/get-one-post/:id", PostController.getOnePost);
router.post("/create", PostController.createPost);
router.put("/update/:id", PostController.updatePost);
router.delete("/delete/:id", PostController.deletePost);

module.exports = router;
