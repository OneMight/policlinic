const Router = require('express')
const router = new Router()
const DiagnosisController = require('../controllers/DiagnosisController');

router.get('/', DiagnosisController.getDiagnosis);
router.post('/create', DiagnosisController.createDiagnose);
router.get('/getByName/:code', DiagnosisController.getByName)
module.exports = router