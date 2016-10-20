var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.get('/about', function(req, res) {
  res.send('im the about page!');
});

router.get('/todo', function(req, res, next) {
  res.render('../views/todolist.jade', {title: 'Todo' });
});

app.use('/', router);

module.exports = router;
