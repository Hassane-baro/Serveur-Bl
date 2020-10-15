const express = require('express');

const utilisateur = require('./utilisateur');
const authentification = require('./authentification');
const barber = require('./barber');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur la V1'
  });
});

router.use('/utilisateur', utilisateur);
router.use('/authentification', authentification);
router.use('/barber', barber);

module.exports = router;
