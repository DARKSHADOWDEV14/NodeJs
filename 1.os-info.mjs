import { platform, release, arch, cpus, freemem, totalmem, uptime} from 'node:os'
// import os from 'node:os'
// const os = require('node:os') si se le da en los 3 puntos que aparece en require las descarga una a una

console.log('Nombre del sistema operarativo', platform())
console.log('Versión del sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus())
console.log('Memoria Libre', freemem() / 1044 / 1024)
console.log('Memria total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)
console.log('')