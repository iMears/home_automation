// The App
var express = require("express");
var morgan = require("morgan");
var app = express();
var Gpio = require('onoff').Gpio,
  led = new Gpio(23, 'out');

app.use(morgan('dev'));

function led_on() {
    led.writeSync(1);
    console.log("led_on");
}

function led_off() {
    led.writeSync(0);
    console.log("led_off");
}

// Get route with one middleware
app.get("/", function (req, res) {
  res.send("Welcome to Pi!!!!!");
});

app.get("/on", function (req, res) {
  led_on();
  res.send("ON");
});

app.get("/off", function (req, res) {
  led_off();
  res.send("OFF");
});

// Create HTTP server with your app
var http = require("http");
var server = http.createServer(app)

// Listen to port 3000
server.listen(9000);

console.log("Started...");

