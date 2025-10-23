const Router = require('express')
const router = new Router()

const EmployeeController = require('../controllers/EmployeeController')

router.get('/', EmployeeController.getEmployees);
router.post('/create', EmployeeController.createEmployee);
router.post('/login', EmployeeController.loginEmployee);
router.post('/logout', EmployeeController.logout);
router.post('/token',EmployeeController.getUserByToken);
router.post('/isAdmin',EmployeeController.isAdmin);
module.exports = router