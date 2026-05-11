const http = require('http');

const userData = [
    {
        name:'Piyush',
        Age:19,
        city:'Vadodara' 
    },

    {
        
        name:'Harsh',
        Age:17,
        city:'Vadodara'
    },

    {
        
        name:'Jaydrath',
        Age:18,
        city:'Vadodara'
    }
]
http.createServer((req,resp) => {
    resp.setHeader("Content-Type","application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
    
}).listen(4500);   /*1. Iske aandar humne object of array se ek simple API banaya or usse check kra ki vo kaise work krta hai 
and Server pr chheze kaisi dikhti hai.

2. Humne ek extension bhi install kara jiska naam hai Thunder Client jo hume help krta hai bina browser open kre VS code se hi humare code ka output hum dekh sake jab hum uspe humara server ka link dale tab. */