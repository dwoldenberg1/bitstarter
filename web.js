var express = require('express');
var app = express();
app.use(express.logger());
var fs=require('fs');

var buf= new buffer(fs.readFileSync(index.html));

app.get('/', function(request, response) {
  response.send(buf.toString("utf-8", 0, 27);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
