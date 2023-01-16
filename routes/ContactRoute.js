const express = require('express')
const router = express.Router();
const {Contact} = require('../controllers/ContactController')

router.get('/contact', Contact)

module.exports = router