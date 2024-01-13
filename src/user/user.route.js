const express = require('express');
const route = express.Router();
const { validate } = require('../../middleware/validation');
const { authentication } = require('../../middleware/authentication.middleware');
const { authorization } = require('../../middleware/authorization.middleware');
const schema = require('./user.validate.schema');
const {
    login,
    addUser,
    getusers,
    getUser,
    updateUser,
    updatePassword,
    userSignup,
    deleteUser
} = require('./user.controller');
//route for login
route.post('/login', validate(schema.loginSchema), login);
//route for signup
route.post('/userSignup', validate(schema.userSignupValidationSchema), userSignup);
module.exports = route;
