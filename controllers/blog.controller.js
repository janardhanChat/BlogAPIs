const { default: mongoose } = require("mongoose");
const blog = require("../models/blogs.model");
const getBlogs = async (req, res) => {
  try {
    const blogs = await blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBlog = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newBlog = new blog({ title, description });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  console.log("🚀 ~ deleteBlog ~ req:===================", req?.params)
  const { id } = req.params;
  console.log("🚀 ~ deleteBlog ~ id:", id)
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No blog with id: ${id}`);
  await blog?.findByIdAndDelete(id);
  res.json({ message: "Blog deleted successfully." });
};

const updateBlog = async (req , res) => {
    const { id } = req.params;
    const { title , description } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No blog with id: ${id}`);
    const updatedBlog = { title , description , _id : id}
    await blog.findByIdAndUpdate(id , updatedBlog , {new : true})
    res.json(updatedBlog)

}
module.exports = { getBlogs, createBlog, deleteBlog, updateBlog };
