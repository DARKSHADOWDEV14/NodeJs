const fs = require('node:fs')



// Método de forma asincrona

console.log('leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) =>{
    console.log('primer texto:', text)
})

console.log('Haciendo cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo....')

fs.readFile('./archivo2.txt', 'utf-8', (err, text2) =>{
    console.log('segundo texto:', text2)
})
