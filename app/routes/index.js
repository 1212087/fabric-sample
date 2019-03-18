var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/car/:id', indexController.findCar)
router.post('/car', indexController.createCar);
router.put('/car/:id/change-owner', indexController.changeOwner)


module.exports = router;
