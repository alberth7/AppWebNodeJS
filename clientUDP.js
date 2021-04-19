var dgram = require('dgram');
var data = new Buffer("Mensaje al servidor");
var client = dgram.createSocket("udp4");
client.send(data, 0, data.length, 8887, "localhost", function (err,
    bytes) {
    if (err)
        console.error('error: ' + err);
    else
        console.log(' Mensaje enviado OK');
    client.close();
});

