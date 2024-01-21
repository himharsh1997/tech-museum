/**
 * @description AuthController
 * 
 * @author Himanshu
 */

const BaseController = require('./baseController');

const AuthBiz = require('../biz/authBiz');

class AuthController extends BaseController {

    async create(req, res) {
        const LOG_PREFIX = '[AuthController - signup] :';
        const authBizObj = new AuthBiz();

        console.log(LOG_PREFIX, 'invoked...');

        try {
            //
            const userInput = req.body;
            console.log(LOG_PREFIX, 'user input: ', userInput);

            const { result, statusCode = 200 } = await authBizObj.signup(userInput) || {};

            const finalResp = { status: 'success', data: result };

            return super.success(res, finalResp, statusCode);
        } catch (error) {
            console.error(LOG_PREFIX + ' error=>', error);

            const statusCode = error.status || 500;
            const errors = error.errors || { message: 'Something went wrong!' };

            const finalResp = { status: 'failure', errors };
            return super.failed(res, finalResp, statusCode);
        }
    }

    async delete(req, res) {
        const LOG_PREFIX = '[AuthController - login] :';
        const authBizObj = new AuthBiz();

        try {
            //
            const userInput = req.body;
            const { result, statusCode = 200 } = authBizObj.login(userInput);

            return this.success(res, result, statusCode);
        } catch (error) {
            console.error(LOG_PREFIX + ' error=>', error);

            const statusCode = error.status || 500;
            const errors = error.errors || { message: 'Something went wrong!' };
            return this.failed(res, errors, statusCode);
        }
    }
}

module.exports = AuthController;