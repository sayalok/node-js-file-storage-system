const { file_storage  } = require(__root_path+'app/models');
const {	privateKey, publicKey} = require(__root_path+'app/util/key_generator')

const { public_file_url } = require(__root_path+"app/util/helper");


const uploadFile = (user_id,file) => {
	let pub_key = publicKey.toString('hex')
	let pri_key = privateKey.toString('hex')

   	if (pub_key != ' ' && pri_key != ' ') {
	    return file_storage.create({
			user_id :user_id,
			file_name: public_file_url(file.filename, "image"),
			pub_key: pub_key,
			private_key: pri_key,
			file_size: file.size
		});
   	} else {
	   return false
   	}
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