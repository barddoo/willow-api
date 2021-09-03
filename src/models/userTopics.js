const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserTopics = sequelize.define(
    'UsersTopics',
    {
      user_id: {
        type: DataTypes.INTEGER,
        unique: 'users_topics_pkey',
        references: {
          model: 'User',
          key: 'id',
        },
      },
      topic_id: {
        type: DataTypes.INTEGER,
        unique: 'users_topics_pkey',
        references: {
          model: 'Topic',
          key: 'id',
        },
      },
    }, {
      createdAt: false,
      updatedAt: false,
      underscored: true,
      tableName: 'users_topics',
    },
  );

  return UserTopics;
};
