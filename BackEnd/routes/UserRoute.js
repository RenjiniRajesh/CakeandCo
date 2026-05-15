const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
router.post('/createuser', UserController.createUser);
router.get('/viewusers', UserController.viewUsers);
router.put('/updateuser/:id', UserController.updateUser);
router.delete('/deleteuser/:id', UserController.deleteUser);
router.post('/login', UserController.Login)
module.exports = router;