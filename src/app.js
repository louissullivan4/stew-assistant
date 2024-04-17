const express = require('express');
const cors = require('cors');

const config = require('./config');
const logger = require('./utils/logger');
const routes = require('./routes/assistant-service');

const createApp = async () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    
    app.get('/', (_, res) => {
        res.send('Stew Assistant Backend');
        logger.info(`Request recieved to /`);
    });

    app.use('/assistant', routes);
    return app;
};

module.exports = createApp;

if (require.main === module) {
    const PORT = config.port;
    logger.info(`Attempting to start server on port ${PORT}`);
    createApp().then(app => {
        const server = app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });

        const gracefulShutdown = async () => {
            server.close(() => {
                logger.info('Server shut down gracefully');
            });
        };

        process.on('SIGINT', gracefulShutdown);
        process.on('SIGTERM', gracefulShutdown);
    });
}