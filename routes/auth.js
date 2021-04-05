const router = require('express').Router();

//Controllers
const { register, login } = require('../controllers/auth');

router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;
