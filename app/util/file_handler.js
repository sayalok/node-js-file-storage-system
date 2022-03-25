const multer = require('multer')
const fs = require('fs')
require('dotenv').config()


module.exports = (folderName, fileName) => {
	console.log('kira vai------------');
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {

            // let path = './public/storage/'

			const path = process.env.FOLDER  || 'storage'

            fs.mkdir(path + '/' +folderName, { recursive: true }, (err) => {
				console.log(err);
                if (!err) {
                    cb(null, path + '/' + folderName)
                } else {
					console.log('on herere');
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