const HelloWorld = require('../core/helloworld');

class ApiController {

    constructor() {

    }
    
    helloworld = async (req, res, next) => {
        const greeting = HelloWorld.helloworld();
        res.json({ greeting });
    }

}

module.exports = ApiController;