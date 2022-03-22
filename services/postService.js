const { User, PostCategorie, Categorie, BlogPost } = require('../models');

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
    // lógica seguida como referência: https://github.com/tryber/sd-015-b-project-blogs-api/pull/117

    return { code: 201, newPost };
};

const getAllPost = async () => {
  const blogPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });

    return { code: 200, blogPost };
};

const getByIdService = async (id) => {
  const blogPost = await BlogPost.findOne({ where: { id }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ] });

    if (!blogPost) {
      return { code: 404, message: 'Post does not exist' };
    }
    return { code: 200, blogPost };
};

module.exports = {
    createPost,
    getAllPost,
    getByIdService,
};
