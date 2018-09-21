const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const port = 3003;
const app = express();

var morgan = require('morgan');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(morgan('dev'));

// Home route. We'll end up changing this to our main front end index later.
app.get('/', function (req, res) {
  res.send('Relax. We will put the home page here later.');
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

var router = express.Router();

//set login page routes to the app  -> CECI A ETE MODIFIER
app.use('/', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// app.listen(port, function () {
//   console.log("server is running on localhost : " + port);
// })
