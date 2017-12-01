var cors = require('cors');
var express = require('express');
var app = express();

// your manifest must have appropriate CORS headers, you could also use '*'
app.use(cors({ origin: 'https://trello.com' }));
