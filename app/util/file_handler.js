const multer = require('multer')
const fs = require('fs')


module.exports = (folderName, fileName) => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            let path = './public/storage/'

            fs.mkdir(path + folderName, { recursive: true }, (err) => {
                if (!err) {
                    cb(null, path + folderName)
                } else {
                    cb(null, false)
                };
            });
        },
        filename: function(req, file, cb) {
            const uniqueSuffix = Date.now() + '_' + Math.round(Math.random())
            cb(null, uniqueSuffix + '_' + file.originalname)
        }
    })

    const fileFilter = (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 5000000 // 5mb
        },
        fileFilter: fileFilter
    })

    return upload.single(fileName)
}