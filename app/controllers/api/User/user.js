const {
    getSingleUser,
    updateUserProfile,
    updateProfilePic,
} = require("./../../../repository/User/user");

const user_resource = require("./../../../resources/User/user_resource");
const server_response = require("./../../../util/response");

const { public_file_url } = require("./../../../util/helper");

exports.user_details = (req, res, next) => {
    return getUserDetails(res, req.auth.email);
};

exports.user_profile_update = (req, res, next) => {
    try {
        return updateUserProfile(req.auth.id, req.body)
            .then((data) => {
                getUserDetails(res, req.auth.email);
            })
            .catch(error => server_response(res, 500, 'Failed', 'Something went wrong', { error: error }))
    } catch (error) {
        server_response(res, 500, 'Failed', 'Something went wrong', { error: error })
    }
};

exports.profile_pic_upload = (req, res, next) => {
    try {
        let path = public_file_url(req.file.filename, "image");
        return updateProfilePic(req.auth.id, path)
            .then((response) => {
                if (response[0] != undefined && response[0] != 0) {
                    server_response(res, 200, 'Success!', 'Profile pic updated Successfully!', {data: path})
                }else{
                    server_response(res, 500, 'Failed', 'Something went wrong')
                }
            })
            .catch(error => server_response(res, 500, 'Failed', 'Something went wrong', { error: error }))
    } catch (error) {
        server_response(res, 500, 'Failed', 'Something went wrong', { error: error })
    }
};

const getUserDetails = (res, email) => {
    return getSingleUser(email, 3)
        .then((user) => {
            if (user === null) {
                server_response(res, 401, "Failed", "No Data Found");
            }

            server_response(
                res, 200, 'Success!', 'Success', {
                    data: user_resource(user)
                }
            )
        }).catch(err => {
            server_response(res, 500, 'Failed', 'Something went wrong', { error: err })
        });
};
