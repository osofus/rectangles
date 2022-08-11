// required imports
const express = require('express')
const bodyParser = require('body-parser')

// ways the process can get terminated
const stopSignals = [
  "SIGHUP", "SIGINT", "SIGQUIT", "SIGILL", "SIGTRAP", "SIGABRT",
  "SIGBUS", "SIGFPE", "SIGUSR1", "SIGSEGV", "SIGUSR2", "SIGTERM"
]

// when the process is killed
stopSignals.forEach(function (signal) {
  process.on(signal, function () {
    // exit the process
    process.exit();
  })
})

// server specifications
const server = express()
const port = 3000

// to parse request body
server.use(bodyParser.json())

// listen on specified port
server.listen(port, () => {
  console.log('Server listening on port ${port}')
})

// index route
server.get('/', (req, res) => {
  res.send('Rectangular interactions')
})

/* handle server requests */

// include submodules
const rectangles = require("./sub_modules/rectangles")
const validators = require("./sub_modules/validators")

// expose exported submodule routes
rectangles.routes(server)
validators.routes(server)