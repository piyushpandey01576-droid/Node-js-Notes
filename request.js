const http = require('http');

http.createServer( (req, resp) => {
    console.log(req);
 if (req.url == '/'){
    resp.write("<h1>This is Response Page</h1>");
 } else if(req.url == "/login"){
    resp.write("<h1>This is login Page</h1>");
 } else{
    resp.write("<h1>This is Other Page</h1>");
 }
    
resp.write("<h1>This side Piyush</h1>");    
resp.end();
}).listen(4200);


// In this chapter humne sikha ki how req work 

/* Key Points to remeber is ki req ka console log kabhi bhi client ke browser pr nahi chalta wo humare terminal par chalega kyuki client browser pr javascript dikhta hai  */


