const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const url = '';


const router = express.Router();
const [user1, user2, user3] = [{
  id:1,
  nom:"Baro",
  prenom:"Hassane",
  profil:"COIFFEUR",
  longitude:"123",
  latitude:"123"
} , {
  id:2,
  nom:"Arland",
  prenom:"Williams",
  profil:"CLIENT",
  longitude:"0",
  latitude:"0"
} , {
  id:3,
  nom:"Admin",
  prenom:"Admin",
  profil:"ADMIN",
  longitude:"",
  latitude:""
} ];

router.get('/', async (req, res, next) => {
  try {
    const items = [user1, user2, user3];
    return res.json({
      message: items
    });
  } catch (e) {
    return next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  /*return (id === 1)
      ? res.json({ message: user1 }) : (id === 2 ) ? res.json({ message: user2 }) :
          (id === 3 ) ? res.json({ message: user3 }) : next() ;*/
  return res.json({ message: user1 });
});

module.exports = router;
