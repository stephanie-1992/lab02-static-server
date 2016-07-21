// Manejadores de rutas virtuales
var FdN = new Date(1992,8,19,01,00)
//Manejadores de rutas virtuales 
module.exports = {
    "/edad/stephanie-vidal": function (req, res) {
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Calculo la edad
        var hoy = new Date();
        var age = Math.ceil((hoy - FdN)/(1000*3600*24*365));    
        //Armando el json
        var objetoRespuesta = {
            "edad":age
        };
        var jsonResponce = JSON.stringify(objetoRespuesta);
        //Envio la respuesta al cliente 
        res.end(jsonResponce);
    },
    "/getfortune":function(req, res){
        // Se obtiene el mensaje de la suerte
        var fortunePaper = {
            "mensaje":
            "La honestidad es un regalo caro, no lo esperes de gente baratisima"
        };
        // Se configura el encabezado de respuesta
        // HTTP
        res.writeHead(200,{
            "Content-Type":"application/json"
        });
        // Parseando a string en objetoRespuesta
        // de respuesta
        var jsonResponse = JSON.stringify(fortunePaper);
        // Respondemos el objeto
        res.end(jsonResponse);
    }
};