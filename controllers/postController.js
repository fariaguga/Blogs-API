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

  module.exports = {
      postController,
  };  