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
      type: DataTypes.INTEGER, // Assuming userId is an integer (change the type if it's different)
      allowNull: false,
    },
  });

  // Define the association between Users and Blogs
  Blog.associate = (models) => {
    Blog.belongsTo(models.User, { foreignKey: 'userId' }); // Assuming your User model is named 'User'
  };

  return Blog;
};
