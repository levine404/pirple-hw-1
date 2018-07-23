// NOT FOUND ROUTE

const notFoundRoute = (req, res) => {
  // SEND 404 STATUS
  res.writeHead(404)
  res.end()

  // LOG IN SERVER
  console.log(`There was a 404 error generated by the server with the path of "${req.path}" and method of "${req.method}"!`)
}

// EXPORT
module.exports = notFoundRoute