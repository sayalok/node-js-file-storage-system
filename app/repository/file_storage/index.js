const { public_file_url } = require(__root_path+"app/util/helper");


const uploadFile = (file) => {
	let path = public_file_url(file.filename, "image");
	return true;
}

const getFileByPubKey = (publicKey) => {
	return true;
}

const deleteFileByPrivateKey = (privateKey) => {
	return true;
}

module.exports = {
	uploadFile,
	getFileByPubKey,
	deleteFileByPrivateKey
};