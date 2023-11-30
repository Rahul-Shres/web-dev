// This code connects our program to the special database where we store information.

const dbConfig = require("../config/dbConfig"); // Gets information to connect to the database.
const { Sequelize, DataTypes } = require("sequelize"); // Helps us talk to the database.

// This part actually connects to the database using the information from dbConfig.
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST, // Connects to the right place where the database is.
  dialect: dbConfig.dialect, // Speaks the same language as the database.
  pool: {
    max: dbConfig.pool.max, // Sets limits on how many people can use the database at once.
    min: dbConfig.pool.min, // Makes sure the database is always available for use.
    acquire: dbConfig.pool.acquire, // Sets a time limit for getting access to the database.
    idle: dbConfig.pool.idle, // Determines how long the database can stay unused before resting.
  },
});

// Checks if we successfully connected to the database.
sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!"); // If we connected, it shows this message.
  })
  .catch((err) => {
    console.log("Error" + err); // If there's an issue, it shows an error message.
  });

const db = {}; // Creates a space to hold all the connections and models related to the database.

db.Sequelize = Sequelize; // Helps our program understand how to talk to the database.
db.sequelize = sequelize; // Keeps the connection to the database ready to use.

// This line connects the blog model to our database.
db.blogs = require("./blogModel.js")(sequelize, DataTypes);
db.users = require("./userModel.js")(sequelize, DataTypes);

//Relationships
db.users.hasMany(db.blogs)
db.users.belongsTo(db.users)

// This part syncs our models with the database to make sure they match.
db.sequelize.sync({ force: true }).then(() => {
  console.log("yes re-sync done"); // Confirms when everything is set up and ready to work.
});

module.exports = db; // Makes all these connections available for other parts of our program to use.
