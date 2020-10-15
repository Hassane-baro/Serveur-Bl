const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const url = '';


const router = express.Router();
const tabCoiffeur = [{
    id:4,
    nom:"Coiffeur1",
    prenom:"Coiffeur1",
    profil:"COIFFEUR",
    longitude:"124",
    latitude:"124",
    img:"https://www.buuyers.com/uploads/pro-logo/coiffeur-coiffure-lysiane-1-logo.jpg"
},{
    id:5,
    nom:"Coiffeur2",
    prenom:"Coiffeur2",
    profil:"COIFFEUR",
    longitude:"122",
    latitude:"122",
    img:"https://www.buuyers.com/uploads/pro-logo/coiffeur-coiffure-lysiane-1-logo.jpg"
} ];

/*router.get('/', async (req, res, next) => {
    try {
        const items = [user1, user2, user3];
        return res.json({
            message: items
        });
    } catch (e) {
        return next(e);
    }
});*/

/*router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  return res.json({ message: user1 });
});*/

router.post('/neartome', async (req, res, next) => {
    try {
        let {authorization} = req.headers ;
        const token = authorization.split(" ")[1] ;
        if(token)
            return res.json(tabCoiffeur);
    } catch (e) {
        return next(e);
    }
});


module.exports = router;
