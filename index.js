/*
 * PIRPLE HOMEWORK ASSIGNMENT #1
 * JUSTIN LEVINE
 * 7/23/2018
 */

// DEPENDENCIES
const http = require('http')
const https = require('https')
const url = require('url')
const StringDecorder = require('string_decoder').StringDecoder
const config = require('./config')
const httpsServerConfig = require('./https-server.config')
const router = require('./router')

// INSTANTIATE SERVERS
const httpServer = http.createServer((req, res) => server(req, res))
const httpsServer = https.createServer(httpsServerConfig, (req, res) => server(req, res))

// START SERVERS
httpServer.listen(config.httpPort, () => {
  console.log(`HTTP server listening on port ${config.httpPort}.`)
})
httpsServer.listen(config.httpsPort, () => {
  console.log(`HTTPS server listening on port ${config.httpsPort}`)
})

// SERVER IS HANDLING BOTH HTTP AND HTTPS REQUESTS
const server = (req, res) => {
  
  // PARSED URL
  const parsedUrl = url.parse(req.url, true)
  
  // PATH (TRIMMED)
  const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '')
  
  // QUERY STRING OBJECT
  const queryStringObj = parsedUrl.query

  // METHOD
  const method = req.method.toLowerCase()

  // HEADERS
  const headers = req.headers

  // HANDLE POTENTIAL PAYLOAD
  const decoder = new StringDecorder('utf-8')
  let buffer = ''
  req.on('data', data => buffer += decoder.write(data))
  req.on('end', () => {
    buffer += decoder.end()

    // PARSED REQ OBJECT
    const parsedReq = {
      path,
      query: queryStringObj,
      method,
      headers,
      payload: buffer
    }

    // ROUTE ACCORDING TO PATH
    if (router[path]) {
      router[path](parsedReq, res)
    } else {
      router['notfound'](parsedReq, res)
    }
  })
}
