const express = require('express');
const router = express.Router();
const controller = require('../controllers/CakeController');
const AuthMiddleware = require('../middlewares/Middleware');

// 1. Create Cake
router.post('/createcake', AuthMiddleware, controller.createCake);

// 2. View ALL Cakes 
router.get('/viewcakes', controller.viewCakes);

// 3. Update Cake
router.put('/updatecake/:id', controller.updateCake);

// 4. Delete Cake
router.delete('/deletecake/:id', controller.deleteCake);

// 5. View Single Cake
router.get('/viewcake/:id', controller.viewCake);

module.exports = router;