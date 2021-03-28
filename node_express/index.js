const express = require ('express')
const http = require('http')

const hostname = 'localhost';
const port = 3000;

const app = express ();

app.use((req,res,next)=>{ // we use next to create middleware
console.log(req.headers)
res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<html><body><h1>This is an express Server</h1></body></html>')
})

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running at http ://${hostname}:${port}`)
});