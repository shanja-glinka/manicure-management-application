const Exceptions = require("./Exceptions");

class AutoRouter {
    constructor() {
        this.exception = new Exceptions;
        this.controllers = this.getContollers();
    }

    getContollers() {
        let controllers = [];
        let controllersPath = this.getContollersPath();

        controllersPath.forEach(file => {
            try {
                let controller = require(file);
                controllers.push(new controller());
            } catch (ex) {
                this.exception.throw("Cannot read Controller: " + file, ex);
            }
        });

        return controllers;
    }

    getContollersPath() {
        const fs = require('fs');

        let result = [];
        let files = fs.readdirSync("./app/controllers");

        for (let i in files)
            if (files[i].indexOf("Root.js") == -1)
                result.push("../../controllers/" + files[i].substring(0, files[i].indexOf(".js")));

        result.push("../../controllers/Root");
        
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
