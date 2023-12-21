// catch asynchronous error
module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => {
            console.error("Caught async error:", err);
            // Log statement within the catch block
            console.log("From catch async service");
            res.status(500).json({
                message: err.message,
                fullError: err
            });
        });
    };
};
