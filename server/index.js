const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
let cors = require("cors");
const config = require('./config/dev');
const { auth } = require('./middleware/auth');
const { User } = require('./models/User');
const app = express();
const port = 5000;

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application.json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))
 
app.get('/api/hello', (req, res) => {
    res.send("hello everyone!")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))