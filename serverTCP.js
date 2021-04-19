var net = require('net');
var server = net.createServer(function (connection) {
    console.log('cliente connectado');
    connection.write('Hola Mundo!\r\n');
    connection.on('end', function () {
        console.log('cliente desconectado');
    });
});

server.listen(8080, function () {
    console.log('servidor esta escuchando');
});


