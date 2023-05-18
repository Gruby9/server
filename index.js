const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url==='/') {
        fs.readFile('index.html', function(err,data) {
            if (err) throw err
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end
        })
    }
    // else if (req.url==='/contact-me') {
    //     fs.readFile('contact-me.html', function(err,data) {
    //         if (err) throw err
    //         res.writeHead(200, {'Content-Type':'text/html'})
    //         res.write(data)
    //         return res.end
    //     })
    // }
    else if (req.url==='/about') {
        fs.readFile('about.html', function(err,data) {
            if (err) throw err
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end
        })
    }
    else {
        fs.readFile('404.html', function(err,data) {
            if (err) throw err
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end
        })
    }

})

// app.get('/contact-me', async (request, response) => {
//     response.send( await readFile('./contact-me.html', 'utf8') );
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})