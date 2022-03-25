require('dotenv').config()

const public_file_url = (fileName, folderName) => {
	const path = process.env.FOLDER  || 'folder'
    return path+'/'+folderName+'/'+fileName
}

module.exports = {
    public_file_url
}