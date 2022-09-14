const Exceptions = require("./Exceptions");

class Responce {
    constructor() {
        this.expressRes = null;
        this.htmlCode = 200;
    }

    new(expressRes, status = null) {
        this.expressRes = expressRes;
        
        if (status !== null)
            this.status = status;

        return this;
    }

    set status(status) {
        this.htmlCode = status;
    }

    send(res = null) {
        let result = {
            "status": this.htmlCode,
            "result": res
        }

        if (this.expressRes)
            return this.expressRes.status(this.htmlCode).json(result);
        else new Exceptions("Cannot initiate Responce");
    }
}

module.exports = Responce;