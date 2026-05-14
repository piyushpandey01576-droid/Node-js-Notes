const http = require('http');

http.createServer( (req, resp) => {


     return resp.end();
} ).listen(4500, () => {
    console.log('Server is running on port 4500');
} );