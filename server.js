/*  --------------- Package List -------------------------- */
const express = require('express');
require('dotenv').config()


/*  --------------- Custom Modules -------------------------- */
const setting = require('./settings') // Including settings

const app = express();
app.use(require('express-status-monitor')())

app.use(setting) // Init Setting

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
