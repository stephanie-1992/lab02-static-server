// http
var http = require("http");
var fs= require('fs');
var config = require("./config/config.js");
var staticServer = require('./internals/static-server');
// Obteniendo información del entorno
// De ejecución con respecto al IP
// y al puerto que debemos usar en
// nuestro server.
var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
if (IP=='127.0.0.1'){
    console.log(">-----EJECUTANDO EN MODO LOCAL");
}
// Crear un servidor basico
var server = http.createServer(function(req, res){
    //obtener la URL
    var url = req.url;
    if(url == "/"){
        //Sirve el index
        url = "/index.html";

    }
    console.log(`>URL Solicitada: ${url}...`.yellow);
    //sirve la url con mi server statico 
    staticServer.serve(url,res);   
    
});
// Poner a trabjar al server
server.listen(PORT,IP,function(){
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});