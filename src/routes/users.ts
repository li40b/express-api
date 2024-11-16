const express = require('express');
const router = express.Router();

router.get('/users', (req:any, res:any) => {
  res.json({ name: "tattu", age: "28"  })
});

module.exports = router;  