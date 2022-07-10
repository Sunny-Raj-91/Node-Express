
const http = require('http')
const fs = require('fs')
const homepage = fs.readFileSync('./navbar-app/index.html')
const homepagestyles = fs.readFileSync('./navbar-app/styles.css')
const homelogo = fs.readFileSync('./navbar-app/icons8-disney-logo.svg')
const homeapp = fs.readFileSync('./navbar-app/browser-app.js')

const port = 8000

const server = http.createServer((req,res)=>
{
    console.log(req.url)
    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homepage)
        res.end();
    }
    if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homepagestyles)
        res.end();
    }
    if(req.url === '/icons8-disney-logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homelogo)
        res.end();
    }
    if(req.url === '/browser-app.js'){
        res.writeHead(200,{'content-type' : 'application/javascript'})
        res.write(homeapp)
        res.end()
    }
    else
    {
        res.writeHead(404,{'content-type' : 'text/plain'})
        res.end()
    }
})
server.listen(port)
console.log(`server listinging at :http://localhost:${port}`)
