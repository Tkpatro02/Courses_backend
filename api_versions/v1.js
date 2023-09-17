const express = require("express");
const router = express.Router();

// Cron Reports
const midnight_cron = require('../jobs/midnight_cron');

// Brands Route
const boiler_plate_route = require('../routes/boiler_plate')
const auth_route = require('../routes/login_details')

// Users
// router.use('/boiler-plate', boiler_plate_route)

router.use('/auth', auth_route)

// Scheduled Jobs
// router.use('/cron', midnight_cron)

module.exports = router;
