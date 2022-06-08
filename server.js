const express = require('express');
const app = express();

// app.configure(function () {
//   app.use(express.static(__dirname + '/static'));
// });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
const port = 4200; // process.env.PORT;
app.listen(port);
console.log('Application running successfully on ', port);
