const Controller = require("../modules/core/Controller");

class Users extends Controller {
    constructor() {
        super();
    }

    modelUser(req, res, next) {
        return this.responce.new(res).send({ "uid": null });
    }

    methodInsertUser(req, res, next) {
        return this.responce.new(res).send({ "uid": null });
    }


    onroute(app) {
        app.get("/user/:clientid", (req, res, next) => { this.modelUser(req, res, next); });
        app.post("/user/:clientid", (req, res, next) => { this.methodInsertUser(req, res, next); });
        // app.get("/about/version", this.modelAboutVersion);
        // app.post("/about/version", this.modelSetAboutVersion);
        // app.put("/about/version", this.modelPutAboutVersion);
        // app.delete("/about/version", this.modelDeleteAboutVersion);


        return app;
    }
}

module.exports = Users;