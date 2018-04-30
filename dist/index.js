'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require('log4js');
const express = require('express');
const onFinished = require('on-finished');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('express-async-errors');
const config = require('./config.json');
const routes = require("./routes");
const app = express();
const logger = log4js.getLogger();
try {
    if (process.env.NODE_ENV === 'production') {
        logger.level = 'INFO';
    }
    else if (process.env.NODE_ENV === 'development') {
        logger.level = 'DEBUG';
    }
    else {
        logger.level = 'DEBUG';
        process.env.NODE_ENV = 'development';
    }
    logger.info(`${process.env.NODE_ENV} mode`);
    app.disable('x-powered-by');
    app.set('trust proxy', config.trustproxy);
    logger.info(`trust proxy: ${config.trustproxy}`);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cors({ origin: config.CORS }));
    app.all('/health', (req, res) => {
        res.status(200);
        res.send();
        res.end();
    });
    app.use((req, res, next) => {
        onFinished(res, (err, response) => {
            if (err) {
                logger.error(err);
                return;
            }
            const { statusCode } = response;
            const { protocol, method, ip, originalUrl } = req;
            const message = [
                protocol,
                method,
                statusCode,
                ip.replace('::ffff:', ''),
                originalUrl
            ].join(' ');
            logger.info(message);
        });
        next();
    });
    app.all('/', (req, res) => {
        const payload = {
            response: 'Welcome to soynote backend'
        };
        res.jsonp(payload);
        res.end();
    });
    app.use('/auth', routes.auth);
    app.use('/oauth', routes.oauth);
    app.use((req, res) => {
        const payload = {
            error: true,
            type: 'invalid uri'
        };
        res.status(400);
        res.jsonp(payload);
        res.end();
    });
    app.use((err, req, res) => {
        if (!err)
            return;
        logger.error(err);
        const payload = {
            error: 'Something went wrong. Please contact the administrator.'
        };
        res.status(500);
        res.jsonp(payload);
        res.end();
    });
    const port = config['http_port'];
    app.listen(port, () => logger.info(`HTTP listening: ${port}`));
}
catch (err) {
    console.log(err);
}
