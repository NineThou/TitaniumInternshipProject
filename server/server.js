/* eslint-disable */
const express = require('express');

const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require('../src/users.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
    jwksUri: "https://titaniumsoft.eu.auth0.com/.well-known/jwks.json"
  }),
  // This is the identifier we set when we created the API
  audience: 'https://titaniumsoft.eu.auth0.com/api/v2/',
  issuer: 'https://titaniumsoft.eu.auth0.com',
  algorithms: ['RS256']
});

app.get('/api/users', (req,res) => {
  res.json(users);
});

app.listen(7777);
console.log('Listening on localhost:7777');