/*  --------------- Package List -------------------------- */
const express = require('express');


/*  --------------- Custom Modules -------------------------- */
const setting = require('./settings') // Including settings

const app = express();
app.use(require('express-status-monitor')())

app.use(setting) // Init Setting

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
