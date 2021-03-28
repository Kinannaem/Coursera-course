const express = require ('express')
const http = require('http')
const morgan = require('morgan')

const hostname = 'localhost';
const port = 3000;

const app = express ();
app.use(morgan('dev')) // dev means development version which print additional information to the screen 

app.use(express.static(__dirname+'/puplic'));

app.use((req,res,next)=>{ // we use next to create middleware
/* console.log(req.headers) we dont need console here because morgan will print the information
 */res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<html><body><h1>This is an express Server</h1></body></html>')
})

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running at http ://${hostname}:${port}`)
});