const Router = require('express')
const router = new Router()
const ReportController = require('../controllers/ReportController');

router.get('/', ReportController.getReports);
router.post('/getByDate',ReportController.getReportByDate);

module.exports = router