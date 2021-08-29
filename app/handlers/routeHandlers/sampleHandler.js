/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Nazmul Haque
 * Date: 08/29/2021
 *
 */
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
