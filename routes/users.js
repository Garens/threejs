var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    name: 'testName',
    list: [
      {name: '第一個json'},
      {name: '第二個json'},
      {name: '第三個json'},
    ]
  });
});

module.exports = router;
