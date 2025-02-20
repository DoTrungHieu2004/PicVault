const express = require('express');
const authCon = require('../controllers/authController');

const router = express.Router();

router.post('/register', authCon.registerUser);
router.post('/login', authCon.loginUser);
router.post('/forgot-password', authCon.forgotPassword);
router.post('/reset-password/:token', authCon.resetPassword);

module.exports = router;