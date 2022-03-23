const server_response = require(__root_path+'app/util/response')

const { uploadFile,	getFileByPubKey,deleteFileByPrivateKey } = require(__root_path+'app/repository/file_storage/index')


exports.upload_file = (req, res, next) => {
	try {
		return uploadFile(req.file)
			.then()
			.catch(error => server_response(res, 500, 'Failed', 'Something went wrong', { error: error }))
	} catch (error) {
        server_response(res, 500, 'Failed', 'Something went wrong', { error: error })
	}
	
}

exports.get_file = (req, res, next) => {
	server_response(res, 500, 'Failed', 'Something went wrong', { error: 'err' })
}

exports.delete_file = (req, res, next) => {
	server_response(res, 500, 'Failed', 'Something went wrong', { error: 'err' })
}