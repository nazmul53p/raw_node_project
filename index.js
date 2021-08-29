/*
 * Title: Project Initial file
 * Description: Initial file to start the node server and workers
 * Author: Nazmul Haque
 * Date: 08/29/2021
 *
 */
// dependencies
const server = require('./app/server');
const workers = require('./app/worker');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;
