const common = require('./common');

module.exports = function() {
    // const dato = common();
    const dato = common.getMessage();
    console.log('El mensaje guardado es: ', dato);
}