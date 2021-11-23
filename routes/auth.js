const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Authenticate a user');
});

router.post('/', (req, res) => {
  res.send('Authentication response');
});

module.exports = router;
