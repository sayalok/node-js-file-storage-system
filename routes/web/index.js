const express = require("express");

const csrf = require("csurf");
const csrfProtection = csrf();

const mainRoutes = require("./main");
const authRoutes = require("./Auth/auth");
const userRoutes = require("./User/user");

const app = express();

app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.user = req.session.user;
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use(authRoutes);
app.use(mainRoutes);
app.use("/user", userRoutes);


// Error handler
app.use((req, res, next) => {
    if (req.session.isLoggedIn) {
        return res.redirect("/admin");
    }else{
        return res.redirect("/admin/login");
    }
})

// Error handler 
app.use((req, res, next) => {
    console.log(req.url, 'her');
    const error = new Error('Not Found');
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if (req.session.isLoggedIn) {
        return res.redirect("/admin");
    }else{
        return res.redirect("/admin/login");
    }
})

module.exports = app;
