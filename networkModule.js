const os = require('node:os')

function getNetworkInfo() {
    const networkInterfaces = os.networkInterfaces();
    const redes = {}

    Object.keys(networkInterfaces).forEach((data) => {
        redes[data] = networkInterfaces[data].map((interface) => ({
             familia: interface.family,
             direccion: interface.address,
             Interno: interface.internal,
        }) 
    )})
    return redes
}

module.exports = { getNetworkInfo }