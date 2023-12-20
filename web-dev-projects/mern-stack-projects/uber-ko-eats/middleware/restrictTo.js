const restrictTo = (...roles)=>{
    return (req,res,next)=>{
       const userRole = req.user.role
       console.log("From restrictTo Middleware : ",userRole,"============================================================================")
       if(!roles.includes(userRole)){
        res.status(403).json({
            message : "you don't have permission for this.forbidden"
        })
       }else{
        next()
       }
    }

}

module.exports = restrictTo