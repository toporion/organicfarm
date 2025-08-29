const { createService, getAllServices, updateService, getServiceById } = require('../controllers/ServiceController');
const upload = require('../middlewares/FileUploader');
const verifyToken = require('../middlewares/VerifyToken');

const router=require('express').Router();

router.post('/add_service',verifyToken,upload.single('profileImage'),createService);
router.get('/all_services',getAllServices);
router.put('/update_service/:serviceId',upload.single('profileImage'), updateService);
router.get('/single_service/:serviceId',getServiceById);
module.exports=router;