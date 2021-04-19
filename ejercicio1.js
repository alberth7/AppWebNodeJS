
var http = require('http');

var server = function(req, res){
    res.writeHead(200,{'Content-Type': 'text/plane'});
    res.write('Hola mi nombre es Alberth');
    res.end();
}

http.createServer(server).listen(5000,function(){
    console.log("el servidor esta escuchando en http://localhost:5000");
});


