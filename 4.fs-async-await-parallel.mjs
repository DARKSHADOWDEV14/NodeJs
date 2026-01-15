// 4.fs-async-await-parallel.mjs

// Método en paralelo

import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2])=>{
    console.log('primer texto:', text)
    console.log('segundo texto:', text2)
})

console.log('leyendo el primer archivo...')
 const text = await readFile('./archivo.txt', 'utf-8')
    console.log('primer texto', text)


console.log('Haciendo cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo....')

 const text2 = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto:', text2)
