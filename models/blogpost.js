const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  content: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  },

  published: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  createdAt: 'published',
  updatedAt: 'updated',
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    Attributes,
    {
      underscore: true,
      // timestamps: false,
      tableName: 'BlogPosts',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'user_id', as: 'Users' });
  };

  return BlogPost;
};