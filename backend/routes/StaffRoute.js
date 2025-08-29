const { createStaff, gettAllStaff, getStaffById, updateStaff } = require('../controllers/StaffController')
const upload = require('../middlewares/FileUploader')
const verifyToken = require('../middlewares/VerifyToken')

const router=require('express').Router()

router.post('/create-staff',verifyToken,upload.single('profileImage'),createStaff)
router.get('/all-staff',verifyToken,gettAllStaff)
router.get('/single-staff/:id',verifyToken,getStaffById)
router.put('/update-staff/:id',verifyToken,upload.single('profileImage'), updateStaff)
module.exports=router