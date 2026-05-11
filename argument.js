const http = require('http');


const arg = process.argv;
const port = arg[2];

http.createServer((req, resp) => {
    resp.write("Hello World!");
    resp.end();
}).listen(port);


/* In this chapter humne sikha ki kaise hum terminal ke help se port change kr sakte hai and jaise hum terminal ko
kehte hai terminal change krne ka usse hum argument kehte hai.

2]. const arg = process.argv; ye hume use krna hota hai jab bhi hume koi argument pass krna ho terminal se.

3].const port = arg[2]; ye tab use hota hai jab hume port ko terminal ke through change krna ho with fixed index 2.*/