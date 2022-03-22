const { PostCategorie, Categorie, BlogPost } = require('../models');

const createPost = async ({ userId, title, content, categoryIds }) => {
  const categories = await Categorie.findAll();
  const AllcategoriesIds = categories.map(({ id }) => id);

  const categorieIdExists = categoryIds.every((id) => AllcategoriesIds.includes(id));

    if (!categorieIdExists) {
      return { code: 400, message: '"categoryIds" not found' };
    }
    
    const newPost = await BlogPost.create({ userId, title, content });

    await Promise.all(
      categoryIds.map((id) => PostCategorie.create({ postId: newPost.id, categoryId: id })),
    );

    return { code: 201, newPost };
};

module.exports = {
    createPost,
};
