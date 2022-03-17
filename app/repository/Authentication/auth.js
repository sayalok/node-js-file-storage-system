const { User, UserDetails } = require("../../models");

const getSingleUser = (email, role_id) => {
  try {
    if (email && email != "") {
      let options = {
        where: {
          email: email,
          role_id: role_id,
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

const adminAuth = (email) => {
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

const deviceIdUpdateOrInsert = (data) => {
  
  // first check is the device id is exists or not
//   console.log("device id:"+data.device_id);
//  if (data.device_id != null) {

  return User.findOne({
    where: {
      device_id: data.device_id,
    },
  })
    .then((obj) => {
      // console.log(obj.dataValues.id);
      // console.log(data.user_id);
      if (obj) {
        if (obj.dataValues.id != data.user_id) {
          // set null to the pervious device id user
          obj.update(
            { device_id: null },
            {
              where: {
                id: obj.dataValues.id,
              },
            }
          );

          // set device id to the new user
          return User.update(
            { device_id: data.device_id },
            {
              where: {
                id: data.user_id,
              },
            }
          );
        } else {
          return obj.update(
            { device_id: data.device_id },
            {
              where: {
                id: data.user_id,
              },
            }
          );
        }
      } else {
        return User.update(
          {
            device_id: data.device_id,
          },
          {
            where: {
              id: data.user_id,
            },
          }
        );
      }
    })
    .catch((error) => {
     return error
    });
//  };
};

module.exports = {
  getSingleUser,
  adminAuth,
  deviceIdUpdateOrInsert,
};
