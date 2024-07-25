const express = require("express");
const router = express.Router();
// const blogController = require("../controllers/blog.controller");
const {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("./../controllers/blog.controller");
router.get("/" ,getBlogs)
router.post("/create-blog", createBlog);
router.delete("/delete-blog/:id", deleteBlog);
router.put("/update-blog/:id", updateBlog);
module.exports = router;