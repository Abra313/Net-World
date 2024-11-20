const express = require('express');
const { register, login } = require('../controller/user');
const validate = require('../middlewares/userValidator');
const userSchema = require('../models/schema/userValidator');

const router = express.Router();

router.post('/register', validate(userSchema), register);
router.post('/login', login);

module.exports = router;
