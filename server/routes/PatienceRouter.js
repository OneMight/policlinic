const Router = require('express')
const router = new Router()

const PatienceController = require('../controllers/PatienceController');

router.get('/', PatienceController.getPatiences);
router.post('/create', PatienceController.createPatient);

module.exports = router