/**
 * @description Auth Biz
 * 
 * @author Fize
 */

const UserInfoRepository = require('../db/repository/userInfoRepository');

class AuthBiz {

    async signup(opts) {
        const LOG_PREFIX = '[AuthBiz - signup] :';

        console.log(LOG_PREFIX, 'opts=>', opts);

        const validationErrors = {};
        if (!opts?.username || !(typeof opts?.username == 'string')) {
            validationErrors.username = 'Username is empty or not alphanumeric';
        }
        if (!opts?.password || !(typeof opts?.password == 'string')) {
            validationErrors.password = 'Password is empty or not alphanumeric';
        }
        if (!opts?.first_name || !(typeof opts?.first_name == 'string')) {
            validationErrors.first_name = 'First Name is empty or not alphanumeric';
        }
        if (!opts?.last_name || !(typeof opts?.last_name == 'string')) {
            validationErrors.last_name = 'Last Name is empty or not alphanumeric';
        }
        if (!opts?.age || !(typeof opts?.age == 'number')) {
            validationErrors.age = 'Age is empty or not number';
        }

        console.log('validation', validationErrors);
        if (Object.keys(validationErrors)?.length > 0) {
            const validationErrorObj = new Error('Signup Validation Error');
            validationErrorObj.status = 400;
            validationErrorObj.errors = validationErrors;
            throw validationErrorObj;
        }

        const userInfoRepositoryObj = new UserInfoRepository();

        const userId = `auth|${new Date().getTime()}${Math.round(Math.random() * 1000)}`;

        const userInfoFromDB = await userInfoRepositoryObj.getUser({ username: opts?.username });
        if (userInfoFromDB?.length) {
            const validationErrorObj = new Error('Username already Exist');
            validationErrorObj.status = 400;
            validationErrorObj.errors = { username: 'Username already exists. Please choose a different username.' };
            throw validationErrorObj;
        }

        const data = {
            userId,
            username: opts?.username,
            firstName: opts?.first_name,
            lastName: opts?.last_name,
            password: opts?.password,
            age: opts?.age,
        }

        await userInfoRepositoryObj.insertNewUser(data);

        const result = { ...opts, user_id: userId };
        delete opts?.password;

        return {
            result
        };
    }

    async login(opts) {

        const validationErrors = {};
        if (!opts?.username || !typeof opts.username == 'string') {
            validationErrors.username = 'Username is empty or not alphanumeric';
        }
        if (opts?.password || !typeof opts.username == 'string') {
            validationErrors.password = 'Password is empty or not alphanumeric';
        }
        if (Object.keys(validationErrors)?.length) {
            const validationErrorObj = new Error('Signup Validation Error');
            validationErrorObj.status = 400;
            validationErrorObj.errors = validationErrorObj;
            throw new validationErrorObj;
        }

        const userInfoRepositoryObj = new UserInfoRepository();
        const userInfoFromDB = await userInfoRepositoryObj.getUser({ username: opts?.username });
        if(!userInfoFromDB?.length){
            const validationErrorObj = new Error('Signup Validation Error');
            validationErrorObj.status = 400;
            validationErrorObj.errors = { username: 'User or password is not matching any record'};
            throw new validationErrorObj;
        }
    }

}

module.exports = AuthBiz;