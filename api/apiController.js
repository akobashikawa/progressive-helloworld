const HelloWorld = require('../core/helloworld');

class ApiController {

    constructor() {

    }
    
    helloworld = (req, res, next) => {
        const greeting = HelloWorld.helloworld();
        res.json({ greeting });
    }

}

module.exports = ApiController;