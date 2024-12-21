const PostModel = require("../models/Post.module");

module.exports.getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({});
    return res.status(200).json({
      data: posts,
      success: true,
      message: "Successfully retrieved all posts.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getOnePost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }
    return res.status(200).json({
      data: post,
      success: true,
      message: "Successfully retrieved one post.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Please provide a title and content.",
      });
    }
    const post = await PostModel.create({ title, content });
    return res.status(201).json({
      data: post,
      success: true,
      message: "Successfully created a post.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide an id.",
      });
    }
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Please provide a title and content.",
      });
    }

    const updated_post = await PostModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updated_post) {
      return res.status(500).json({
        success: false,
        message: "cannot update post",
      });
    }

    return res.status(200).json({
      data: updated_post,
      success: true,
      message: "Successfully updated post.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide an id.",
      });
    }
    const deleted_post = await PostModel.findByIdAndDelete(id);
    if (!deleted_post) {
      return res.status(500).json({
        success: false,
        message: "cannot delete post",
      });
    }
    return res.status(200).json({
      data: deleted_post,
      success: true,
      message: "Successfully deleted post.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
