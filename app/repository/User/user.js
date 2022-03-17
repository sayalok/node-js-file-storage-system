const { User, UserDetails, UserMealPlan, BlockCategory, MealPlan, Blocks, WeekDay, MealTypeCategory, user_goal, goal_list  } = require('../../models');
const { generateHashPassword } = require("./../../library/jwt");
// const { mailConfig } = require("./../../library/mail");

const getSingleUser = (email, role_id=3) => {
    try {
        if (email && email != "") {
            let options = {
                where: {
                    email: email,
                    role_id: role_id,
                    status: 1,
                },
                include: {
                    model: UserDetails,
                    as: "user_details",
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

const updateUserProfile = (id, userData) => {
    let options = {
        where: { id },
        include: {
            model: UserDetails,
            as: "user_details",
        },
    };
    return User.findOne(options)
        .then((obj) => {
            // user table
            obj.username = userData.input_username;

            if (userData.input_device_id != undefined) {
                obj.device_id = userData.input_device_id;
            }

            // user details table
            if (userData.input_given_name != undefined) {
                obj.user_details.given_name = userData.input_given_name;
            }

            if (userData.input_family_name != undefined) {
                obj.user_details.family_name = userData.input_family_name;
            }

            if (userData.input_state != undefined) {
                obj.user_details.state = userData.input_state;
            }

            if (userData.input_phone != undefined) {
                obj.user_details.phone_no = userData.input_phone;
            }

            if (userData.input_address != undefined) {
                obj.user_details.address = userData.input_address;
            }

            if (userData.input_dob != undefined) {
                obj.user_details.date_of_birth = userData.input_dob;
            }

            if (userData.input_protein != undefined) {
                obj.user_details.recommended_protien = userData.input_protein;
            }

            if (userData.input_carb != undefined) {
                obj.user_details.recommended_carbs = userData.input_carb;
            }

            if (userData.input_fat != undefined) {
                obj.user_details.recommended_fat = userData.input_fat;
            }

            if (userData.input_water_units != undefined) {
                obj.user_details.water_units = userData.input_water_units;
            }

            obj.save();
            return obj.user_details.save();
        })
        .catch((error) => {
            return false;
        });
};

const updateProfilePic = (id, filePath) => {
    return User.update({ avatar: filePath }, { where: { id } });
};

const getAllUserListsByRole = (role_id) => {
    let options = {
        where: { role_id },
        include: {
            model: UserDetails,
            as: "user_details",
        },
    };
    return User.findAll(options);
};

const updatePassword = (data) => {
    return User.update(
        { password: data.password },
        { where: { email: data.email } }
    );
};

const getUserDetails = (id) => {
    let options = {
        where: { id },
        include: [
            {
                model: UserDetails,
                as: "user_details",
            },
            {
                model: UserMealPlan,
                as: "user_meal_plan",
                include: {
                    model: BlockCategory,
                    as: "block_categories",
                    include: [
                        {
                            model: MealPlan,
                            as: "meal_plan",
                            include: [
                                {
                                    model: Blocks,
                                    as: "block_details",
                                },
                                {
                                    model: WeekDay,
                                    as: "week_day_details",
                                },
                                {
                                    model: MealTypeCategory,
                                    as: "meal_type_category_details",
                                },
                            ],
                        },
                    ],
                },
            },
            {
                model: user_goal,
                as: "user_goal_list",
                include: [
                    {
                        model: goal_list,
                        as: "goal_list",
                    }
                ]
            }
        ],
    };
    return User.findOne(options);
};

const userStatusUpdate = (id, status) => {
    return User.update({ status }, { where: { id } });
};

const userNutritionistCreate = (data,role_id) => {
    return generateHashPassword('123456')
        .then((password) => {
            return User.create({
                username: data.input_given_name + ' ' +data.input_family_name,
                email: data.input_email,
                password: password,
                role_id: role_id,
                status: 1,
                user_details: [{
                    given_name: data.input_given_name,
                    family_name: data.input_family_name,
                    gender: data.input_gender,
                    state: data.input_state,
                    phone_no: data.input_contact,
                    address: data.input_street,
                }]
                
            },{
                include: [{
                    association: 'user_details',
                }]
            })
            .then((user) => {
                return mailConfig().sendMail({
                    from: "help@bbn.com", // sender address
                    to: data.input_email, // list of receivers
                    subject: "Account create message", // Subject line
                    text: "Here is Your Password", // plain text body
                    template: "account_create",
                    context: {
                      password: '123456',
                    },
                });
            })
            .catch(error => {
                return error
            })
        })
        .catch(error => {
            return error
        })
}

module.exports = {
    getSingleUser,
    updateUserProfile,
    updateProfilePic,
    getAllUserListsByRole,
    updatePassword,
    getUserDetails,
    userStatusUpdate,
    userNutritionistCreate
}
