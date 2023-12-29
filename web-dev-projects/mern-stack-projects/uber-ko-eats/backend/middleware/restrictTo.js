const restrictTo = (...roles) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        console.log("User Role from restrictTo Middleware: ", userRole);
        if (!roles.includes(userRole)) {
            res.status(403).json({
                message: "You don't have permission for this. Forbidden"
            });
        } else {
            next();
        }
    };
};

module.exports = restrictTo;
