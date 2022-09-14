const Request = require("./Request");
const Responce = require("./Responce");
const Exceptions = require("./Exceptions");

class Controller {
    constructor() {
        this.request = new Request;
        this.responce = new Responce;
        this.exception = new Exceptions;

        this.modelPath = "../models/";
    }

    onroute(req, res, next) { }

    loadModel(model) {
        try {
            return require(this.modelPath + model);
        } catch (ex) {
            this.exception.throw("Cannot read Model: " + model, ex);
        }
    }
}

module.exports = Controller;