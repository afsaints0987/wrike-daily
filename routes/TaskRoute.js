const express = require('express')
const router = express.Router();
const {getTasks} = require('../controllers/TaskController')

router.get('/tasks', getTasks)

module.exports = router