const { createLogger, format, transports, config } = require('winston');
const { combine, timestamp, prettyPrint, json } = format;

const logger = createLogger({
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        prettyPrint(),
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: './logs/errors.log' })
    ]
})

module.exports = {
    errorlog: logger,
};