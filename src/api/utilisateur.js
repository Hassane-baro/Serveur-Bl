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
const tabCoiffeur = [{
  id:4,
  nom:"Coiffeur1",
  prenom:"Coiffeur1",
  profil:"COIFFEUR",
  longitude:"124",
  latitude:"124"
},{
  id:5,
  nom:"Coiffeur2",
  prenom:"Coiffeur2",
  profil:"COIFFEUR",
  longitude:"122",
  latitude:"122"
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

/*router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  return res.json({ message: user1 });
});*/

router.get('/me', async (req, res, next) => {
  try {
    let {authorization} = req.headers ;
    const oldToken = authorization.split(" ")[1] ;
    const user = (oldToken === "client") ? user2
        : (oldToken === "coiffeur") ? user1
            : user3 ;
    /*if (!user || !(await bcrypt.compare(password, user.hash)))
        throw 'Username or password is incorrect';*/

    // authentication successful
    // const token = jwt.sign({sub: user.id}, config.secret, {expiresIn: '7d'});
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTYwMjE1MDEwNCwiZXhwIjoxNjAyNzU0OTA0fQ.c70Szzp5MfPbd-zVPbvPkhhquZIxzj0ScQSaEsWprL8";
    return res.json({...user, token});
  } catch (e) {
    return next(e);
  }
});

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
