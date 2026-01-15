const fs = require('node:fs')

// Metod de forma sincrona

console.log('leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)

console.log('Leyendo el segundo archivo....')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text2)

// Método de forma asincrona

console.log('leyendo el primer archivo...')
fs.readFileSync('./archivo.txt', 'utf-8', (err, text) =>{
    console.log(text)
})

console.log('Haciendo cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo....')

fs.readFileSync('./archivo2.txt', 'utf-8', (err, text2) =>{
    console.log(text2)
})
