module.exports = (user) => {
    let userObj;
    userObj = {
        id: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar ?? "",
    };
    return userObj;
};
