const express = require('express')
const router = express.Router();
const {Login, Callback, Refresh, Logout} = require('../controllers/LoginController')

router.get('/login', Login)
router.get('/callback', Callback)
router.get('/refresh', Refresh)
router.get('/logout', Logout)

module.exports = router