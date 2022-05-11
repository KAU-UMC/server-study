module.exports = function(app){
    const test = require('./testController');

    // 1. Return test API result
    app.get('/app/test', test.getHelloWorld);
}