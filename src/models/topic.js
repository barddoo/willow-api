const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Topic = sequelize.define(
    'Topic',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      english_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      klingon_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      createdAt: false,
      updatedAt: false,
      underscored: true,
      tableName: 'topics',
    },
  );

  return Topic;
};
