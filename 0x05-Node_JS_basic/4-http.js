const http = require('http');
const app = http.createServer((req, res) => {
  // Ste the response header to plain text
  res.setHeader('Content-Type', 'text/plain');
  // print the response
  res.end('Hello Holberton School!');
});

//listen on porrt 1235
app.listen(1245, () => {
  console.log('server is running on http://localhost:1245');
});
//Exporting the app
module.exports = app;