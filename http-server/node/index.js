const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const data = {
        greeting: 'Hello World!!!'
    }

    res.write(JSON.stringify(data));
    res.end();
}).listen(3000, () => {
    console.log('Server running on port 3000');
});