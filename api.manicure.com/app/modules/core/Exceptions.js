class Exceptions {
    
    throw(message, ex, code = 200) {
        console.log(ex);
        throw message;
    }
}

module.exports = Exceptions;