var http = require('http');
const port = process.env.PORT || 3000;

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World! 2 '); //write a response to the client
  res.end(); //end the response
}).listen(port);


// console.log('hello world');