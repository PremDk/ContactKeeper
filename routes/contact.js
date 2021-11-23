const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get Contact');
});

router.post('/', (req, res) => {
  res.send('post contact');
});

router.put('/:id', (req, res) => {
  res.send('Update user');
});

router.delete('/:id', (req, res) => {
  res.send('delete user');
});

module.exports = router;
