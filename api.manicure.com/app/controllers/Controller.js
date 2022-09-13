const Request = require("../modules/core/Request");
const Responce = require("../modules/core/Responce");

class Controller {
    constructor() {
        this.request = new Request;
        this.responce = new Responce;
     }

    onroute(req, res, next) { }
}

module.exports = Controller;