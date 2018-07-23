// HELLO ROUTE

// CAN ACCEPT A QUERY WITH NAME
const helloRoute = (req, res) => {
  // HELLO MESSAGE OBJECT
  const helloMessage = {
    helloMessage: `Hello${req.query.name ? `, ${req.query.name}` : ''}`
  }
  
  // SET HEADER TO EXPECT JSON
  res.setHeader('Content-Type', 'application/json')

  // STATUS CODE 200
  res.writeHead(200)

  // RETURN STRINGIFIED VERSION OF HELLO MESSAGE
  res.end(JSON.stringify(helloMessage))
}

// EXPORTS
module.exports = helloRoute
