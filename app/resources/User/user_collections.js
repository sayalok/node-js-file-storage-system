const user_resource = require("./user_resource");

module.exports = (userList) => {
    
    let userListData = [];

    userList.forEach(item => {
        let user = user_resource(item)
        userListData.push(user[0])
    })
    return userListData;
}