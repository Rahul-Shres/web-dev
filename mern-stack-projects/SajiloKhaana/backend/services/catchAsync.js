module.exports = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (err) {
            return res.status(500).json({
                message: err.message,
                fullError: err
            });
        }
    };
};
