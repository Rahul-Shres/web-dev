const restrictTo = (...roles)=>{
    
    return (req,res,next) =>{
        const userRole = req.user.role
        console.log(userRole)
        console.log(roles)
        if(!roles.includes(userRole)){
            res.status(403).json({
                message : "you don't have permission"
            })
        } else{
            next()
        }
    }
}

module.exports = restrictTo;