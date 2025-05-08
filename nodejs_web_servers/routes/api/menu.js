const express = require('express');
const router = express.Router();
const menuController = require('../../controllers/menuController');
const verifyJWT = require('../../middleware/verifyJWT');

// Protect this route with JWT
router.post('/', verifyJWT, menuController.addMenuItem);

module.exports = router;
