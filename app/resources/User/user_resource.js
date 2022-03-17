module.exports = (user) => {
    let data = [];

    let userObj;
    userObj = {
        id: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar ?? "",
        device_id: user.device_id??""
    };

    if (!!user.user_details) {
        userObj.given_name = user.user_details.given_name;
        userObj.family_name = user.user_details.family_name;
        userObj.next_session = user.user_details.next_session;
        userObj.dob = new Date(user.user_details.date_of_birth).toLocaleDateString("es-cl");
        userObj.state = user.user_details.state;
        userObj.water_units = user.user_details.water_units != null ? user.user_details.water_units : 0;
        userObj.phone = user.user_details.phone_no != null ? user.user_details.phone_no : "";
        userObj.address = user.user_details.address != null ? user.user_details.address : "";
        userObj.recommended_protien = user.user_details.recommended_protien != null ? user.user_details.recommended_protien : 0;
        userObj.recommended_fat = user.user_details.recommended_fat != null ? user.user_details.recommended_fat : 0;
        userObj.recommended_carbs = user.user_details.recommended_carbs != null ? user.user_details.recommended_carbs : 0;
        userObj.status = user.status;
    }

    data.push(userObj);

    return data;
};
