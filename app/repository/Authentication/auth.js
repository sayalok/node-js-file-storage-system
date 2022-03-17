const { User } = require(__root_path+"app/models");

const getSingleUser = (email) => {
	try {
		if (email && email != "") {
			let options = {
				where: {
					email: email,
					status: 1,
				},
			};
			return User.findOne(options);
		} else {
			return false;
		}
	} catch (error) {
		return false;
	}
};


module.exports = {
  getSingleUser
};
