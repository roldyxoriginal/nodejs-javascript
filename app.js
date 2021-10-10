const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const healthRouter = require('./src/routes/health');

const app = express();

app.use(logger('dev'));

if (app.get("env") == "production") {
    const accessLogStream = fs.createWriteStream(__dirname + '/logs/' + "access.log", { flags: 'a' });
    app.use(logger("combined", { stream: accessLogStream }));
}
else {
    app.use(logger("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/health', healthRouter);

module.exports = app;
