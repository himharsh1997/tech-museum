/**
 * @description Redis connection 
 * 
 * @author Himanshu
 */

const redis = require('redis');
const cacheCon = redis.createClient({
    host: 'localhost',
    port: 6379
});

exports.cacheCon = cacheCon;