class httpError extends Error {
    constructor(message, errorCode, err){
        super(message);
        this.code = errorCode;
        this.err = err
    }
}

module.exports = httpError;