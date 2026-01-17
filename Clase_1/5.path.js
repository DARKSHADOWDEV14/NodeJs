const path = require('node:path')

// console.log(path.sep) para ver forma de copiar bien el path \

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('\\tmp\\andrew-secret-files\\password.txt')
console.log(base)

const filename = path.basename('/tmp/andrew-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.super.image.jpg')
console.log(extension)