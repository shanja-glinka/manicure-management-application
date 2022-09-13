const Exceptions = require("../modules/core/Exceptions");

class AutoRouter {
    constructor() {
        this.exception = new Exceptions;
        this.controllers = this.getContollers();
    }

    getContollers() {
        let controllers = [];
        let controllersPath = this.getContollersPath("/AutoRouter.js");

        controllersPath.forEach(file => {
            try {
                let controller = require(file);
                controllers.push(new controller());
            } catch (ex) {
                // throw ex;
                this.exception.throw("Cannot read Controller", ex);
            }
        });

        return controllers;
    }

    getContollersPath() {
        const fs = require('fs');

        let result = [];
        let files = fs.readdirSync("./app/controllers");

        for (let i in files)
            if (files[i].indexOf("AutoRouter.js") == -1 && files[i].indexOf("Controller.js") == -1)
                result.push("./" + files[i].substring(0, files[i].indexOf(".js")));

        return result;
    }

    start(appExpress) {
        if (!appExpress)
            this.exception.throw("Cannot init Router");

        let routes = {};

        this.controllers.forEach(controller => {
            if (typeof controller.onroute === "function")
                controller.onroute(appExpress);
        });

        appExpress._router.stack.forEach(function (middleware) {
            if (middleware.route) {
                if (!routes.hasOwnProperty(middleware.route.path))
                    routes[middleware.route.path] = {
                        methods: middleware.route.methods
                    };
                else
                    routes[middleware.route.path].methods = Object.assign(routes[middleware.route.path].methods, middleware.route.methods);

            }
        });

        return routes;
    }
}

module.exports = AutoRouter;
