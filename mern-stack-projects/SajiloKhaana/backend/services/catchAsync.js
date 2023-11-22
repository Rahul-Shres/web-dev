module.exports = (fn) => {
    return async (req, res, next) => {
        try {
            if (typeof fn !== 'function') {
                console.error('Error: Provided argument is not a function:', fn);
                return res.status(500).json({
                    message: 'Provided argument is not a function',
                    fullError: {}
                });
            }

            await fn(req, res, next);
        } catch (err) {
            console.error('Error in catchAsync:', err);
            return res.status(500).json({
                message: err.message,
                fullError: err
            });
        }
    };
};
