const express = require('express');
const employeeController = require('../controllers/employee.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', authMiddleware, employeeController.getAllEmployees);
router.post('/', authMiddleware, employeeController.createEmployee);

module.exports = router;
