function hola(){
    sweetAlert("World Places",
    "¡Bienvenido a esta pagina!");
    document.body.style.backgroundColor = "lightseagreen"
}

function changeBkgColor()
    var color = document.body.style.backgroundColor;
    if(color == "lightseagreen"){
        console.log(">Color Original: " + color);
        if(color == "lightseagreen"){
             color = "honeydew";                     
    }else{
        color = "lightseagreen";
    }
    console.log("> Cambiando color a " + color);
    document.body.style.backgroundColor = color;
}