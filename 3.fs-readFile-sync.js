const fs =  require('node:fs')

// Método sincrono

console.log('leyendo el primer archivo...')
const text =  fs.readFileSync('./archivo.txt', 'utf-8')
    console.log('primer texto', text)


console.log('Haciendo cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo....')

 const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
    console.log('segundo texto:', text2)
    //3.fs-readFile-sync.js