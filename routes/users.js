var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ])
})

module.exports = router;
