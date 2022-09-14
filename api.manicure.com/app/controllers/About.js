const Controller = require("../modules/core/Controller");

class About extends Controller {
    constructor() {
        super();
    }

    modelAbout(req, res, next) {
        return this.responce.new(res).send("OK");
    }

    modelAboutVersion(req, res, next) {
        return this.responce.new(res).send('Received a GET HTTP method');
    }

    methodInsertAboutVersion(req, res, next) {
        return this.responce.new(res).send('Received a POST HTTP method');
    }

    methodPutAboutVersion(req, res, next) {
        return this.responce.new(res).send('Received a PUT HTTP method');
    }

    methodDeleteAboutVersion(req, res, next) {
        return this.responce.new(res).send('Received a DELETE HTTP method');
    }

    onroute(app) {
        app.get("/about", (req, res, next) => { this.modelAbout(req, res, next); });
        
        app.get("/about/version", (req, res, next) => { this.modelAboutVersion(req, res, next); });
        app.post("/about/version", (req, res, next) => { this.methodInsertAboutVersion(req, res, next); });
        app.put("/about/version", (req, res, next) => { this.methodPutAboutVersion(req, res, next); });
        app.delete("/about/version", (req, res, next) => { this.methodDeleteAboutVersion(req, res, next); });

        
        return app;
    }
}

module.exports = About;