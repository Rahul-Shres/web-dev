const router = require('express').Router();
const { getAllNews, renderCreateNews, createNews, getSingleNews, deleteNews, getEditNews, editedNews, getMyNews } = require('../controller/newsController');
const { isAuthenticated } = require('../middleware/isAuthenticated');
const {multer, storage} = require('../middleware/multerConfig');
const { isValidUser } = require('../middleware/validUser');
const upload = multer({ storage: storage})
router.route('/').get(getAllNews);
router.route('/createNews').get(isAuthenticated,renderCreateNews).post(isAuthenticated,upload.single("image"),createNews);
router.route('/single/:id').get(getSingleNews);
router.route("/delete/:id").get(isAuthenticated,deleteNews);
router.route('/editNews/:id').get(isAuthenticated,getEditNews).post(isAuthenticated,isValidUser,upload.single("image"),editedNews);
router.route('/myblogs').get(isAuthenticated, getMyNews)
module.exports = router;


// app.get('/', getAllNews );
// app.get('/createNews', renderCreateNews );
// app.post('/createNews', createNews);
// app.get('/single/:id', getSingleNews)
// app.get('/delete/:id', deleteNews);
// app.get('/editNews/:id', getEditNews);
// app.post('/editNews/:id', editedNews);