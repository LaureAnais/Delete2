const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const db = require('../models/index.model');
const fs = require('fs');
const { match } = require('assert');
// const getUserId = require('../utils/getUserId');
const dotenv = require('dotenv').config();

exports.signup = (req, res, next) => {
  if(!req.body.password/match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/)){
      return res.status(400).json(
          { error : "Le mot de passe n'est pas assez fort. Il doit contenir 8 caractères minimum dont 1 chiffre, 1 lettre en minuscule, 1 lettre en majuscule et un caractère spécial"})
  }  
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
        db({
        email: req.body.email,
        password: hash,
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => {console.log(error);
          res.status(400).json({ error })});
    })
    .catch(error => res.status(500).json({ error }));
  } else { 
       res.writeHead(400, '{"message":"Mot de passe requis : 8 caractères minimun. Au moins 1 Majuscule, 1 minuscule. Sans espaces"}', {
      'content-type': 'application/json'
      });   
   };  