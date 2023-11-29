// This code helps create a special structure to save information about users.
// Think of a user model as a blueprint for storing user details in a database.

module.exports = (sequelize, DataTypes) => {
    // Here, we're defining the structure of a user.
  
    const User = sequelize.define("User", {
      // A user has a username, similar to a unique identifier or display name.
      username: {
        type: DataTypes.STRING, // This field will consist of letters and words.
        allowNull: false, // Every user must have a username. It can't be empty.
      },
      // A user also has an email address, serving as a unique identification method.
      email: {
        type: DataTypes.STRING, // Email field, also made of letters and words.
        allowNull: false, // Every user needs an email. It can't be empty.
      },
      // Additionally, a user has a password for authentication and security.
      password: {
        type: DataTypes.TEXT, // The password can be longer and is sensitive information.
        allowNull: false, // Every user must have a password. It can't be left empty.
      },
  
    });
  
    // Finally, we've established a structure (User model) adhering to these rules.
  
    return User; // This model (User structure) is ready to be used to manage user data.
  };
  