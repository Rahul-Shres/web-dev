const db = require('../../model/index');
const {QueryTypes} = require("sequilize")
const sequelize = db.sequelize;

const generateRandomOrganizationNumber = () =>{
    return Math.floor(10000000 + Math.random() * 90000000)
}

exports.createBlog= (req,res)=>{
    const userId = req.userId;
    const {name, address, vatNo} = req.body;
    let OrganizationNumber = generateRandomOrganizationNumber();
    if(!name || !address || !vatNo){
        res.send("Please enter a title, subtitle or description")
    }

// CREATE BLOG TABLE IF EXISTS OR NOT
    sequelize.query(`CREATE TABLE IF NOT EXISTS organization_${OrganizationNumber}(
        id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
        userId INT NOT NULL REFRENCE user(id) ON DELETE CASCADE ON UPDATE CASCADE,
        name varchar(255),
        address varchar(255),
        vatNo varchar(255),
    )`,{
        type: QueryTypes.CREATE(`INSERT INTO organization_${OrganizationNumber}(name,address,vatNo,userId) VALUES(?,?,?,?)`,{
            type: QueryTypes.INSERT,
            replacements : [name, address, vatNo, userId]
        })
    })


}