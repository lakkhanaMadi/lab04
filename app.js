console.log("First message");

//Read file in branch-> feature/read-file
const fs1 = require('fs');
fs1.readFile('file.txt', 'utf8', function (err, data) {
if (err) throw err;
console.log(data);
});

//write to file in branch-> feature/write-to-file
const fs2 = require('fs');
fs2.writeFile('file.txt', 'Hello World!', function (err) {
if (err) throw err;
console.log('File saved!');
});

//creating web-server in branch-> feature/web-server
const http = require('http');
http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write('Hello World');
  res.end();
}).listen(8080);