const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

// la sequelize yo config haru lag ani database connect gardey vaneko hae 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port : 3306, 
  // port : 7013,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importing model files 
db.news = require("./newsModel.js")(sequelize, DataTypes);
db.users = require("./userModel.js")(sequelize, DataTypes);

// relationship
//Foreign key ko colums chayo 
//user le jati ni blog halna paunu parxa
db.users.hasMany(db.news)
db.news.belongsTo(db.users)

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done");
});

module.exports = db;