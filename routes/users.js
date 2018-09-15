const express = require('express');
var router = express.Router();
// Get List of Users
router.get('/', (req, res) => {
  res.send('Users');
});
// Get user detail by username
router.get('/:username', (req, res) => {
  const params = req.params;
  res.send(`Get user by username: ${params.username}`);
});

module.exports = router;