const express = require('express');
const UserRoutes = express.Router();

const AuthController = require('../controller/authController');
const authControllerObj = new AuthController();


UserRoutes.post('/create', (req, res) => {
    return authControllerObj.signup(req, res);
});
UserRoutes.post('/delete', ()=>{
    return authControllerObj(req, res);
});

module.exports = UserRoutes;