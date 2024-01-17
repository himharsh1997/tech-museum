/**
 * @description Base controller
 * 
 * @author Fize
 */

class BaseController {

    constructor() { }

    success(resp, data, statusCode = 200) {
        return resp.status(statusCode).send(data);
    }

    failed(resp, data, statusCode = 500) {
        return resp.status(statusCode).send(data);
    }
}

module.exports = BaseController;