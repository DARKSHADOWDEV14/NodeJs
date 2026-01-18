const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')
// const { findAvailablePort } = require('./10.free-port.js')

// console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')// , req.url

  if (req.url === '/') {
    res.end('Hola mundo página de inicio')
  } else if (req.url === '/imagen-bonita.png') {
    fs.readFile('./imagen.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1> 500 internal server Error </h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })

  } else if (req.url === 'contacto') {
    res.end('Contacto')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}/imagen-bonita.png`)
})
