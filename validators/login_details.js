const jwt = require('jsonwebtoken');
const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];
const secret = stage.JWT_SECRET;
var pool = require('../connections/mysql');
const Database = require('../services/database');
const Response = require('../services/response');
const { body, param, validationResult } = require('express-validator');

module.exports = {
    validateLogin: [
        body('loginId')
            .exists({ checkFalsy: true, checkNull: true })
            .isLength({ min: 1, max: 5000 }).withMessage('Should not be empty')
            .trim(),
        function (req, res, next) {
            var errorValidation = validationResult(req);
            if (!errorValidation.isEmpty()) {
                return res.status(Response.required('a').code).send(Response.required('LoginId'));
            }
            next()
        },
        body('password')
        .exists({ checkFalsy: true, checkNull: true })
        .isLength({ min: 1, max: 5000 })
        .withMessage('Should not be empty')
        .trim(),
    function (req, res, next) {
        var errorValidation = validationResult(req);
        if (!errorValidation.isEmpty()) {
            return res.status(Response.required('a').code).send(Response.required('Password'));
        }
        next()
    },
    ],
    
};
