/**
 * @description UserInfoRepository
 * 
 * @author Himanshu
 */


const db = require('../../../knex');

const TABLES = require('../../constants/tables');

class UserInfoRepository {

    async getUser(opts) {
        const LOG_PREFIX = '[UserInfoRepository - getUser] :';

        const columns = opts?.columns || ['first_name'];
        const query = db.table(TABLES.USER_INFO);
        if (opts?.username) {
            query.where('username', '=', opts?.username);
        }

        const result = await query.select(columns);
        console.log(LOG_PREFIX, 'result=>', result);

        return result;
    }

    async insertNewUser(opts) {
        const data = {
            user_id: opts?.userId,
            username: opts?.username,
            first_name: opts?.firstName,
            last_name: opts?.lastName,
            age: opts?.age,
        };

        await db.table(TABLES.USER_INFO).insert(data);
    }

}

module.exports = UserInfoRepository;