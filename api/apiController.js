class ApiController {

    constructor({ apiService }) {
        this.apiService = apiService;
    }
    
    helloworld = (req, res, next) => {
        const greeting = this.apiService.helloworld();
        res.json({ greeting });
    }

}

module.exports = ApiController;