const http = require('http');

http.createServer((req, resp) => {
    console.log(req.url, req.method);
if(req.url === '/' ) {

    resp.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
</head>
<body>

    <h2>User Registration</h2>

    <!-- Action specifies where to send data, Method="POST" hides data from URL -->
    <form action="/submit" method="POST">
        
        <!-- Username Field -->
        <div style="margin-bottom: 15px;">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" placeholder="Enter username" required>
        </div>

        <!-- Password Field -->
        <div style="margin-bottom: 15px;">
            <label for="gender">Gender:</label><br>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
        </div>


        <!-- Submit Button -->
        <button type="submit">Submit Form</button>

    </form>

</body>
</html>
    `);
    } else if (req.url === '/submit' && req.method === 'POST') {
        resp.end('<h1>Form submitted successfully!</h1>');
        
        const inputData = [];
        req.on('data', (chunks) => {
            console.log(chunks);
            inputData.push(chunks);
        });
        return req.on('end', () => {
            const finalInputData = Buffer.concat(inputData).toString();
            console.log(finalInputData);
            return resp.end();
        });
    }
    return resp.end();
}).listen(4500, () => {
    console.log('Server is running on port http://localhost:4500');
});
