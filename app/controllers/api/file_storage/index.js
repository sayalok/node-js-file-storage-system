const server_response = require(__root_path+'app/util/response')

const { uploadFile,	getFileByPubKey,deleteFileByPrivateKey } = require(__root_path+'app/repository/file_storage/index')


exports.upload_file = (req, res, next) => {
	try {
		return uploadFile(req.auth.id,req.file)
			.then(response => {
				if (response && response.dataValues) {
					server_response(res, 200, 'Success!', 'Photo uploaded Successfully!', {data: {
						public_key: response.dataValues.pub_key,
						private_key: response.dataValues.private_key
					}})
				}else{
					server_response(res, 500, 'Failed', 'Something went wrong')
				}
				
			})
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