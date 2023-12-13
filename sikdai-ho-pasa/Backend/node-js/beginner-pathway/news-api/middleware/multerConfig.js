const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {

    //logic to validate the fileType(mimeType) and
    const allowedFileTypes = ['image/jpg', 'image/png', 'image/jpeg', 'image/jepg']
    if(!allowedFileTypes.includes(file.mimetype)){
      cb(new Error("Invalid file type png,jpeg,jpg"))
      return;
    }
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

module.exports = {
  multer,
  storage
};