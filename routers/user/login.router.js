var express = require('express');
var router = express.Router();

const controller = require('../../controller/user/login.controller')

router.post('/',controller.login)
module.exports = router;