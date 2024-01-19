const getInfoSystem = require('./node-os/osModule.js')
const getNetworkInfo = require('./node-os/networkModule.js')

console.log(getInfoSystem())
console.log(getNetworkInfo())