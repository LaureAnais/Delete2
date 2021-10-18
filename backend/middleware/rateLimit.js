// RateLimit - to secure Backend APO from malicious attacks
// It allows us to cap the number of requests that a user can make to our APIs

const rateLimit = require("express-rate-limit");

const connectAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 5, 
  message:
    "Vos tentatives de connexion ont dépassées le nombre autorisé, merci de réesayer dans 1 heure.",
  headers: true
});

module.exports = connectAccountLimiter;