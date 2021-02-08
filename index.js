require('dotenv-safe').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    console.log(req.body);
    res.send('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log(`Running at ${process.env.PORT}`)
})