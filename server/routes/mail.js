const express = require('express');
const { postEmail } = require('../controller/sendMail');

const router = express.Router();

router.post('/send-email', postEmail);

module.exports = router;
