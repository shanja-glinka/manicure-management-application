class Exceptions {
    constructor(message = null, ex = null, code = 200) {
        if (message)
            this.throw(message, ex, code);
    }

    throw(message, ex, code = 200) {
        console.log(ex);
        throw message;
    }
}

module.exports = Exceptions;