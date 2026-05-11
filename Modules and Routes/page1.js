const http = require ('http');
const page2 = require('./page2');
const page3 = require('./page3');



http.createServer( (req, resp) => {

    resp.writeHead(200, {"content-type": "text/html"} )
    if (req.url == '/'){
page2(req, resp);
 
    } else if(req.url == '/html/submit?'){
page3(req, resp);
    } 
        resp.end();

}).listen(1800);