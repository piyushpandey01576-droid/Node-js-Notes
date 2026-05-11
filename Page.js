const http = require('http');
const fs = require('fs');


const arg = process.argv;
const port = arg[2]
http.createServer( (req,resp) => {
 fs.readFile(`html/page.html`,`utf-8`,(error,data) => {

    if(error){
        resp.writeHead(404,{'content-type':'text/plain'})
        resp.end("Internal Server Error");
      
        
       resp.writeHead(200,{'content-type':'text/html'}) 
    } else if (req.url =='/'){
        resp.write(data);
    }  else if(req.url == '/submit?') {
        resp.write('Form is submitted');
        
    }
resp.end();


 })



}).listen(1500);

/* Yaha ek form ke through humne dekha kaise server ke aandar humara HTML file attach kr sakte hai hum */

// Key Steps;

// Create server
//import fs file
// inside a server add your html file using readFie
    



















// const http = require('http');
// const fs = require('fs');




// const arg = process.argv;
// const port = arg[2];

// http.createServer((req, resp)=>{
//     fs.readFile("html/page.html",'utf-8', (err,data) => {
       
//         if(err){
//             resp.writeHead(404,{"content-type":"text/plain"})
//             resp.end('Internal Server Error');
//        }    
//         resp.writeHead(200,{"content-type":"text/html"})

//        if(req.url=='/'){
//         resp.write(data);
//        }else if(req.url == '/submit'){
//         resp.write('Form is submitted');
//        }
//     resp.end();
    
//     })

// }).listen(port);