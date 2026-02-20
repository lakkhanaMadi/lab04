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

//creating http request -> feature/sending-http-request
const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
let data = '';
resp.on('data', (chunk) => {
data += chunk;
});
resp.on('end', () => {
console.log(JSON.parse(data));
});
}).on('error', (err) => {
console.log("Error: " + err.message);
});

/*Output
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',    
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'


*/