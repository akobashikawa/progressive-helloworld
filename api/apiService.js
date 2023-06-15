const HelloWorld = require('../core/helloworld');

class ApiService {
    constructor() {

    }

    helloworld() {
        return HelloWorld.helloworld();
    }
}

module.exports = ApiService;