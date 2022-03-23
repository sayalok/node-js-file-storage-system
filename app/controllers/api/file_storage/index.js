const server_response = require(__root_path+'app/util/response')


exports.upload_file = (req, res, next) => {
	server_response(res, 500, 'Failed', 'Something went wrong', { error: 'err' })
}