// HTTPS SERVER CONFIG

// DEPENDENCIES
const fs = require('fs')

// CONFIG CONTAINER
const config = {}

// KEY AND CERT
config.key = fs.readFileSync('./https/key.pem')
config.cert = fs.readFileSync('./https/cert.pem')

// EXPORT
module.exports = config
