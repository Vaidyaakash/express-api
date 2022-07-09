const express = require('express');
const homeRouter = require('./Routes/home');
const latestRoute = require('./Routes/LetestN');
const app = express()

app.use(cors())
app.use('/main', homeRouter)
app.use('/main', latestRoute)

app.listen(4545, () => {
    console.log("app is started");
})