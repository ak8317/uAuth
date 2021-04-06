const router = require('express').Router();

//Controllers
const {
  register,
  login,
  forgotPassword,
  resetpassword,
} = require('../controllers/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword/:resetToken').put(resetpassword);
module.exports = router;
