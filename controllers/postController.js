const postService = require('../services/postService');

const postController = async (req, res) => {
    try {
        const { title, categoryIds, content } = req.body;
        const { id } = req.tokenData;
        console.log(id);

        const { code, message, newPost } = await postService.createPost({
            userId: id,
            title,
            content,
            categoryIds,
        });
        if (message) return res.status(code).json({ message });
        return res.status(code).json(newPost);
    } catch (error) {
        return console.error(error);
    }
  };

const getAllController = async (req, res) => {
    try {
        const { code, message, blogPost } = await postService.getAllPost();
        if (message) return res.status(code).json({ message });
        return res.status(code).json(blogPost);
    } catch (error) {
        return console.error(error);
    }
  };

  const getByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const { code, message, blogPost } = await postService.getByIdService(id);
        if (message) return res.status(code).json({ message });
        return res.status(code).json(blogPost);
    } catch (error) {
        return console.error(error);
    }
  };

  module.exports = {
      postController,
      getAllController,
      getByIdController,
  };  