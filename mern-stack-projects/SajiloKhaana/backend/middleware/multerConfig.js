const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //check the mimetype
      const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg']
      if(!allowedFileTypes.includes(file.mimetype)) {
        cd(new Error("Thhis filetype is not supported"));
        return
       }
      cb(null, './D:/workspace/mern-stack-projects/SajiloKhaana/backend/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
//   const upload = multer({ storage: storage })

module.exports = {
    multer,
    storage
}