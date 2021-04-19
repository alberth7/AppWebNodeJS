var dgram = require('dgram');
var server = dgram.createSocket("udp4");
server.on("message", function (msg) {
    console.log("Se recibió: " + msg);
});
server.bind(8887);
