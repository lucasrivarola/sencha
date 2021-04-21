var express = require('express');
var router = express.Router();
const controller = require('../controllers/historialController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/historial', controller.vista);
router.post('/historial', controller.historial);

module.exports = router;
