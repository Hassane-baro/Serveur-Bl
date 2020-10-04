const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config');

const url = '';


const router = express.Router();
const [user1, user2, user3] = [{
    id: 1,
    nom: "Baro",
    prenom: "Hassane",
    profil: "COIFFEUR",
    longitude: "123",
    latitude: "123"
}, {
    id: 2,
    nom: "Arland",
    prenom: "Williams",
    profil: "CLIENT",
    longitude: "0",
    latitude: "0"
}, {
    id: 3,
    nom: "Admin",
    prenom: "Admin",
    profil: "ADMIN",
    longitude: "",
    latitude: ""
}];

router.post('/', async (req, res, next) => {
    try {
        const {username, password} = req.body ;
        //const user = await db.User.scope('withHash').findOne({ where: { username } });
        const user = (username === "admin") ? user3
            : (username === "coiffeur") ? user1
            : user2 ;
        /*if (!user || !(await bcrypt.compare(password, user.hash)))
            throw 'Username or password is incorrect';*/

        // authentication successful
        const token = jwt.sign({sub: user.id}, config.secret, {expiresIn: '7d'});
        return res.json({user, token});
    } catch (e) {
        return next(e);
    }
});

module.exports = router;
