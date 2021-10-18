const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const rateLimit = require('../middleware/rateLimit');
const multer = require('../middleware/multerUsers');

const userCtrl = require('../controllers/users');

router.post('/signup', userCtrl.signup);
router.post('/login', rateLimit, userCtrl.login);
router.put('/:id', auth, multer, userCtrl.updateProfile);
router.delete('/:id', auth, multer, userCtrl.deleteProfile);
router.get('/:id', auth, userCtrl.getOneProfile);
router.get('/', auth, userCtrl.getAllProfiles);

// router admin deleteProfile + updateProfile + setUserAsAdmin

module.exports = router;
