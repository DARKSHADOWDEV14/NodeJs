const http = require('node:http')

//comonJS --> modulos clásicos de node

const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
    const { method, url } = req
    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.statusCode = 484
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h> 404 </h1>')
            }
        case 'POST':
            switch (url) {
                case '/pokemon':
                    let body = ''
            }
    }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
    console.log(`server listening on port http://localhost:${"3000"}`)
})
