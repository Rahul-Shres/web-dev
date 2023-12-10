const router = require('express').Router();
const { getAllNews, renderCreateNews, createNews, getSingleNews, deleteNews, getEditNews, editedNews } = require('../controller/newsController');
const { isAuthenticated } = require('../middleware/isAuthenticated');

router.route('/').get(getAllNews);
router.route('/createNews').get(renderCreateNews).post(isAuthenticated,createNews);
router.route('/single/:id').get(isAuthenticated,getSingleNews);
router.route("/delete/:id").get(isAuthenticated,deleteNews);
router.route('/editNews/:id').get(isAuthenticated,getEditNews).post(isAuthenticated,editedNews);

module.exports = router;


// app.get('/', getAllNews );
// app.get('/createNews', renderCreateNews );
// app.post('/createNews', createNews);
// app.get('/single/:id', getSingleNews)
// app.get('/delete/:id', deleteNews);
// app.get('/editNews/:id', getEditNews);
// app.post('/editNews/:id', editedNews);