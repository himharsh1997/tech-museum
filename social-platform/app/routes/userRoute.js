const express = require('express');
const UserRoutes = express.Router();

const AuthController = require('../controller/authController');
const authControllerObj = new AuthController();


UserRoutes.post('/signup', (req, res) => {
    return authControllerObj.signup(req, res);
});
UserRoutes.post('/login', authControllerObj.login);

module.exports = UserRoutes;