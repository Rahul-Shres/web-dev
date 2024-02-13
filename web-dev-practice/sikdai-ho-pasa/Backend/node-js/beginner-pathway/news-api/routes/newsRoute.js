const router = require('express').Router();
const { getAllNews, renderCreateNews, createNews, getSingleNews, deleteNews, getEditNews, editedNews, getMyNews } = require('../controller/newsController');
const { isAuthenticated } = require('../middleware/isAuthenticated');
const {multer, storage} = require('../middleware/multerConfig');
const { isValidUser } = require('../middleware/validUser');
const catchError = require('../services/catchError');
const upload = multer({ storage: storage})
router.route('/').get(getAllNews);
router.route('/createNews').get(catchError(isAuthenticated),catchError(renderCreateNews)).post(isAuthenticated,upload.single("image"),createNews);
router.route('/single/:id').get(catchError(getSingleNews));
router.route("/delete/:id").get(catchError(isAuthenticated),catchError(deleteNews));
router.route('/editNews/:id').get(catchError(isAuthenticated),catchError(getEditNews)).post(isAuthenticated,isValidUser,upload.single("image"),editedNews);
router.route('/myblogs').get(catchError(isAuthenticated), catchError(getMyNews))
module.exports = router;


// app.get('/', getAllNews );
// app.get('/createNews', renderCreateNews );
// app.post('/createNews', createNews);
// app.get('/single/:id', getSingleNews)
// app.get('/delete/:id', deleteNews);
// app.get('/editNews/:id', getEditNews);
// app.post('/editNews/:id', editedNews);