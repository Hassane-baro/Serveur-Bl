const express = require('express');

const utilisateur = require('./utilisateur');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur la V1'
  });
});

router.use('/utilisateur', utilisateur);

module.exports = router;
