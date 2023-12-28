const { QueryTypes } = require("sequelize");
const { sequelize, users } = require("../../model");



exports.renderOrganizationForm = (req, res) => {
  res.render("addOrganization");
};
// random number generate gara
const generateRandomNumber = () => {
  return Math.floor(1000 + Math.random() * 9000);
};
// naya organization create gara
exports.createOrganization = async (req, res, next) => {
  // user xa vane tesko id userId ko dabba ma rakha
  const userId = req.userId;

  // find data of above userId
  const user = await users.findByPk(userId);

  const organizationNumber = generateRandomNumber();
  const {
    organizationName,
    organizationAddress,
    organizationPhoneNumber,
    organizationEmail,
  } = req.body;
  // yo duita null vaye ni hunxa
  const organizationPanNumber = req.body.organizationPanNumber || null;
  const organizationVatNumber = req.body.organizationVatNumber || null;

  // create users_org table
  await sequelize.query(
    `CREATE TABLE IF NOT EXISTS users_org(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, userId INT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE, organizationNumber VARCHAR(255))`,
    {
      type: QueryTypes.CREATE,
    }
  );

  // create organization Table
  await sequelize.query(
    `CREATE TABLE organization_${organizationNumber}(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), phoneNumber VARCHAR(255), address VARCHAR(255), panNo VARCHAR(255), vatNo VARCHAR(255) )`,
    {
      type: QueryTypes.CREATE,
    }
  );

  // insert above data to table
  await sequelize.query(
    `INSERT INTO organization_${organizationNumber}(name,email,phoneNumber,address,panNo,vatNo) VALUES (?,?,?,?,?,?) `,
    {
      type: QueryTypes.INSERT,
      replacements: [
        organizationName,
        organizationEmail,
        organizationPhoneNumber,
        organizationAddress,
        organizationPanNumber,
        organizationVatNumber,
      ],
    }
  );

  await sequelize.query(
    `INSERT INTO users_org (userId,organizationNumber) VALUES(?,?)`,
    {
      type: QueryTypes.INSERT,
      replacements: [userId, organizationNumber],
    }
  );
  user.currentOrgNumber = organizationNumber;
    //  This action updates the currentOrgNumber field for this particular user in the database.
    // you're updating the currentOrgNumber field (or property) of the user object and then using 
    // await user.save(); to store that updated currentOrgNumber value in the user table within your database.
  await user.save();
  //  save the newly created organizationNumber to the currentOrgNumber field in the user table in the database. 


  // The line req.organizationNumber = organizationNumber; in the provided code snippet is setting a property 
  // named organizationNumber on the req (request) object.
  req.organizationNumber = organizationNumber;
  next();
};

exports.createForumTable = async (req, res) => {
  const organizationNumber = req.organizationNumber;

  // create table

  await sequelize.query(
    `CREATE TABLE forum_${organizationNumber}(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,questions VARCHAR(255),answer VARCHAR(255))`,
    {
      type: QueryTypes.CREATE,
    }
  );
  res.send("Organization created successfully");
};
