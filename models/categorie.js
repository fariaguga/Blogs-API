const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    // field: 'id',
  },

  name: {
    type: DataTypes.STRING,
    // allowNull: false,
    // field: 'display_name',
  },
};

module.exports = (sequelize) => {
  const Categorie = sequelize.define(
    'Categorie',
    Attributes,
    {
      underscore: true,
      timestamps: false,
      tableName: 'Categories',
    },
  );

  return Categorie;
};