// ROUTER

// DEPENDENCIES
const fs = require('fs')

const router = {}

// IMPORT ROUTES FROM ROUTES FOLDER
fs.readdirSync('./routes').forEach(file => {
  // ENSURE FILE IS ROUTE FILE
  if (file.match(/\.route.js$/) !== null) {
    // GENERATE PATH NAME
    const pathName = file
      .replace('.route.js', '')
      .replace('-', '')
    console.log('file', pathName)
    router[pathName] = require(`./routes/${file}`)
  }
})

// EXPORTS
module.exports = router
