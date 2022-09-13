const Controller = require("./Controller");

class Root extends Controller {
    constructor() {
        super();
    }

    modelRoot(req, res, next) {
        res.status(200).send("");
    }

    htmlError404(req, res, next) {
        res.status(404).json("");
    }

    onroute(app) {
        app.use(this.htmlError404);
        app.get("/", this.modelRoot);

        return app;
    }
}

module.exports = Root;