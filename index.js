const express = require('express')
const app = express();
const port = 8000;
const connectDB  = require('./connect');
const urlRoute = require('./routes/routes');
connectDB()


app.use("/url", urlRoute)

app.listen(port, () => { console.log(`Server Started At Port : ${port}`); });