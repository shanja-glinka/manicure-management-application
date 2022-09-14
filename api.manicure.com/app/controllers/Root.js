const Controller = require("../modules/core/Controller");

class Root extends Controller {
    constructor() {
        super();
    }

    modelRoot(req, res, next) {
        this.responce.new(res).send("OK");
    }

    htmlError404(req, res, next) {
        this.responce.new(res, 406).send("Method not accepted");
    }

    onroute(app) {
        app.get("/", (req, res, next) => { this.modelRoot(req, res, next); });
        app.use((req, res, next) => { this.htmlError404(req, res, next); });

        return app;
    }
}

module.exports = Root;