var express = require('express');
var app = express();
const flags = args.parse(process.argv)

app.get('/', function (req, res) {
  res.send('Hello World! te saluda ----> Khervi');
});
console.log("el factorial de : ")
factorial= n*(n+1);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});  parse