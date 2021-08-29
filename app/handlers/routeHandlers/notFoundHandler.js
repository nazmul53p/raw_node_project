/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Nazmul Haque
 * Date: 08/29/2021
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
