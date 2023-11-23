// This code helps create a special structure to save information about blogs.
// Imagine a blog like a story or article on the internet.

module.exports = (sequelize, DataTypes) => {
  // Here, we're making a special plan (like a blueprint) for how a blog should look.

  const Blog = sequelize.define("blog", {
    // A blog has a title, like the name of a story or a headline.
    title: {
      type: DataTypes.STRING, // This means the title will be made of letters and words.
      allowNull: false, // Every blog must have a title. It can't be empty.
    },
    // A blog also has a subtitle, which is like a smaller headline giving more info.
    subTitle: {
      type: DataTypes.STRING, // Similar to the title, made of letters and words.
      allowNull: false, // Every blog needs a subtitle too. It can't be empty.
    },
    // Then, a blog has content, which is the main part of the story or article.
    content: {
      type: DataTypes.TEXT, // The content can be longer and might have lots of words.
      allowNull: false, // Every blog must have content. It can't be left empty.
    },
  });

  // Finally, we created a structure for a blog using these rules. It's like a plan for making a new blog.

  return Blog; // This plan (Blog structure) is ready to be used to create and store actual blogs.
};
