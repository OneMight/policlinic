const Router = require('express')
const router = new Router()
const AppoitmentController = require('../controllers/AppoitmentController');

router.get('/', AppoitmentController.getAppoitment);
router.post('/create', AppoitmentController.createAppoitment);
router.post('/byId', AppoitmentController.getAppoitmentByEmployee);
router.post('/updAppo', AppoitmentController.updAppointment);
module.exports = router