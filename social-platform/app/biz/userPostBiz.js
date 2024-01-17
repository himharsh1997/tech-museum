/**
 * @description Auth Biz
 * 
 * @author Fize
 */

const UserInfoRepository = require('../db/repository/userInfoRepository');

class AuthBiz {

    async createPost(opts) {
        const LOG_PREFIX = '[AuthBiz - createPost] :';

        console.log(LOG_PREFIX, 'opts=>', opts);

    }

    async deletePost(opts) {

        const LOG_PREFIX = '[AuthBiz - deletePost] :';

        console.log(LOG_PREFIX, 'opts=>', opts);
    }

}

module.exports = AuthBiz;