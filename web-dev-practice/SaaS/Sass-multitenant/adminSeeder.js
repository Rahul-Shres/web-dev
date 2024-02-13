

const seedAdmin  = async(users)=>{
    const isAdminExists = await users.findAll({
        where : {
          email : "rahul.ussac@gmail.com"
        }
    
       })
       if(isAdminExists.length == 0 ){
        await users.create({
          email : "rahul.ussac@gmail.com",
          username : "admin",
          googleId : "115426078494190430143",
          role : "admin"
        })
        console.log("Admin seeded successfully")
       } else{
    
         console.log("admin already seeded")
       }
    
}

module.exports = seedAdmin