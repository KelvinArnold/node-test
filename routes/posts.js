const express = require('express');
var router = express.Router();

// Get repos by username
router.get('/:username', (req, res) => {
  const params = req.params;
  res.send(`Get Repost by username: ${params.username}`);
});

module.exports = router;