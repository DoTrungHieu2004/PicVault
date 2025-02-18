const express = require('express');
const authCon = require('../controllers/authController');

const router = express.Router();

router.post('/register', authCon.registerUser);
router.post('/login', authCon.loginUser);

module.exports = router;