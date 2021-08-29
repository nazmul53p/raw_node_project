/*
 * Title: Routes
 * Description: Application Routes
 * Author: Nazmul Haque
 * Date: 08/29/2021
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');


const routes = {
    sample: sampleHandler,
};

module.exports = routes;
