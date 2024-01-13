const userService = require('./user.service');
const {
    sendResponse,
    errorHandler,
    decryptPassword,
    encryptPassword,
} = require('../../utils/common_functions');
//controller for login
const login = async (req, res) => {
    try {
        const {
            body: { email, password, type },
        } = req;
        const condition = { email };
        const options = {
            _id: 1,
            name: 1,
            roleType: 1,
            password: 1,
            isActive: 1
        };
        const user = await userService.getUserWithOptions(condition, options);
        if (!user)
            return sendResponse(res, false, 400, 'Please enter your registered email address.');
        const originalPassword = await decryptPassword(password, user.password);
        if (!originalPassword)
            return sendResponse(res, false, 400, 'Please enter a valid password.');
        if (user.roleType !== type) return sendResponse(res, false, 400, 'Invalid user id.');
        if (!user.isActive) return sendResponse(res, false, 400, 'Account deactivated.');
        const userToken = await userService.getUserToken(user);
        return sendResponse(res, true, 200, 'Login successful.', userToken);
    } catch (error) {
        return errorHandler(error, res);
    }
};
// Signup a new user
const userSignup = async (req, res) => {
    try {
        const { body: data } = req;
        const phoneNumber = await userService.getUserByPhoneNumber(data.phoneNumber);
        if (phoneNumber) return sendResponse(res, false, 409, 'User phone number already exist.');
        const email = await userService.getUserByEmail(data.email);
        if (email) return sendResponse(res, false, 409, 'User email already exist.');
        const password = await encryptPassword(data.password);
        data.password = password;
        const user = await userService.addUser(data);
        const userToken = await userService.getUserToken(user);
        return sendResponse(res, true, 200, 'Signup successful.', userToken);
    } catch (error) {
        return errorHandler(error, res);
    }
};
module.exports = {
    login,
    userSignup
};
