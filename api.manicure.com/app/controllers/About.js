const Controller = require("./Controller");

class About extends Controller {
    constructor() {
        super();
    }

    modelAbout(req, res, next) {
        return res.send('About');
    }

    modelAboutVersion(req, res, next) {
        return res.send('Received a GET HTTP method');
    }

    modelSetAboutVersion(req, res, next) {
        return res.send('Received a POST HTTP method');
    }

    modelPutAboutVersion(req, res, next) {
        return res.send('Received a PUT HTTP method');
    }

    modelDeleteAboutVersion(req, res, next) {
        return res.send('Received a DELETE HTTP method');
    }

    onroute(app) {
        app.get("/about", this.modelAbout);
        app.get("/about/version", this.modelAboutVersion);
        app.post("/about/version", this.modelSetAboutVersion);
        app.put("/about/version", this.modelPutAboutVersion);
        app.delete("/about/version", this.modelDeleteAboutVersion);

        
        return app;
    }
}

module.exports = About;