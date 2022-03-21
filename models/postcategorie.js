module.exports = (sequelize) => {
  const PostCategorie = sequelize.define(
    'PostCategorie',
    {},
    {
      underscore: false,
      timestamps: false,
      tableName: 'PostsCategories',
    },
  );

  PostCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, 
      { foreignKey: 'postId', otherKey: 'categorId', through: PostCategorie, as: 'Categories' });

      models.Categorie.belongsToMany(models.BlogPost, 
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategorie, as: 'BlogPosts' });
  };

  return PostCategorie;
};