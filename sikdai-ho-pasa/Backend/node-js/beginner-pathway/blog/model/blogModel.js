// blogModel.js
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // Define the association between Users and Blogs
  Blog.associate = (models) => {
    Blog.belongsTo(models.user, { foreignKey: 'userId' }); // Ensure 'user' matches your User model name
  };

  return Blog;
};
