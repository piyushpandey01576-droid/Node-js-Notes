const http = require('http');



let age = 18;

http.createServer((req,resp) => {
    resp.setHeader("Content-Type","text/html");
    resp.write (`
        <html>
        <head>
        <title>
        Response Page
        </title>
           </head>
        <body>
        <h1>This is a response page</h1>
        <h2>`+age+`</h2>
     <h2>`+new Date()+`</h2>
        </body>
        </html>
        `);  // yaha par ++ use krna jaruri hai else hume humara response nahi dikhega 
    resp.end ();      // Yaha par par response end hota hai uske bina server ka response end nhi hota 
    process.exit();              // Process end krne ke liye yaha par process end ho jata hai mtlb aab server bandh hogya 
}
).listen(5800);
