const { createUser, loginUser, getUserByEmail } = require('../controllers/UserController');
const upload = require('../middlewares/FileUploader');

const router=require('express').Router();

router.post('/register',upload.single('profileImage'),createUser)
router.post('/login',loginUser)
router.get('/getUserByEmail',getUserByEmail)


module.exports=router;
