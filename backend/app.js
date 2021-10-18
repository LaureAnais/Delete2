const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRoutes = require('./routes/users');
const commentsRoutes = require('.routes/comments');

const helmet = require('helmet');

// Création d'une application express
const app = express();

app.use(helmet());

//Résolution erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/users', usersRoutes);
app.use('/api/comments', commentsRoutes);

module.exports = app;