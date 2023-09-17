const express = require("express");
const router = express.Router();

// Controlling autority for the route
const controller = require('../controllers/login_details');

// Authenticate User
// const authenticator = require('../middleware/authenticator');

// Check request parameter
const validator = require('../validators/login_details');

// Sanitize request parameter
const sanitizer = require('../sanitizers/login_details');

router.post(
    '/',
    // authenticator.authenticate,
    validator.validateLogin,
    sanitizer.sanitizeLogin,
    controller.login
);