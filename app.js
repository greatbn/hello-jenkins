var express = require('express');

var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('hello Sa phi');
=======
  res.send('hello jenkins');
>>>>>>> 2d7708b76b1eaff2fec387bcaa83a62e12beb997
});

app.listen(process.env.PORT || 5000);

module.exports = app;
