

function solicitarEdad (){
    let edad;
    do{
     edad = prompt("Decime tu edad")
        if(!edad || isNaN(edad) || parseInt(edad) <= 0 || parseInt(edad) >= 100){
            alert("Decime una edad valida, por favor")
        }
        
    }while(!edad || isNaN(edad) || parseInt(edad) <= 0 || parseInt(edad) >= 100)
    return parseInt(edad)
}

function solicitarProcesador(){
    let procesador;
    do{
        procesador = prompt("Elije un procesador:\n AMD o INTEL").toLowerCase()
        if(procesador!== "intel" && procesador !== "amd"){
            alert("elije una opcion correcta")
        }

    }while(procesador!== "intel" && procesador !== "amd")
        return procesador

}


function solicitarAlmacenamiento(){
    let almacenamiento;
    
    do{
        almacenamiento = prompt("ELije una SSD de 500GB o 1TB").toLowerCase()
           
        if(almacenamiento !== "500gb" && almacenamiento !== "1tb"){
            alert("Tu eleccion es invalida")
        }
    }
    while(almacenamiento !== "500gb" && almacenamiento !== "1tb"){
      
    }   
    
    return almacenamiento

}

function solicitarRefrigeracion (){
    let refrigeracion;
    do{
        refrigeracion = prompt("Elije entre Refrigeracion por Cooler o Liquida").toLowerCase()
        if( refrigeracion !== "cooler" && refrigeracion !== "liquida"){
            alert("Escribe una respuesta valida por favor")
        }
    }while(refrigeracion !== "cooler" && refrigeracion !== "liquida")
    return refrigeracion
}



function solicitarVideo(){
    let video;
    do{
        video = prompt("Que placa de video te interesa?\n Radeon o Nvidia").toLowerCase()
        if(video !== "radeon" && video !== "nvidia"){
            alert("Elije una opcion correcta")
        } 
    }while(video !== "radeon" && video !== "nvidia")
    
    return video
}


function solicitarMother(){
    let mother;
    do{
        mother = prompt("Elije una mother\n ASUS O ASROCK").toLowerCase()

        if(mother !== "asus" && mother !== "asrock"){
            alert("Elije una opccion correcta")
        }
    }while(mother !== "asus" && mother !== "asrock")
    
    return mother
}

function solicitarFuente(){
    let fuente;
    do{
        fuente =prompt("Elije una fuente \n 500w o 1000w").toLowerCase()
        if(fuente !== "500w" && fuente !== "1000w"){
            alert("Elije una opccion correcta")
        }
    }while(fuente !== "500w" && fuente !== "1000w")
    
    return fuente
}


function verificarEdad(){

    let edad = solicitarEdad()

    if(edad >= 18){
        alert("Sos mayor de EDAD, tienes acceso a la pagina")

        let nombre = prompt("Decime tu nombre por favor")

        let apellido= prompt("Decime tu apellido")
        alert("Bienvenido " + nombre + " " + apellido + ", Empezemos a Armar la pc !")

        let procesador = solicitarProcesador();
        let refrigeracion = solicitarRefrigeracion();
        let mother = solicitarMother();
        let video = solicitarVideo();
        let almacenamiento = solicitarAlmacenamiento();
        let fuente = solicitarFuente();

        function pcArmada(p,r,m,v,a,f){
            alert("Tu PC va a llevar los siguientes componentes\n" +
                "Procesador: " + procesador + "\n" + 
                "refrigeracion: " + refrigeracion + "\n" + 
                "mother: " + mother + "\n" + 
                "video: " + video + "\n" + 
                "almacenamiento: " + almacenamiento + "\n" + 
                "fuente: " + fuente + "\n"
             )
        }
        
        pcArmada(procesador,refrigeracion,mother,video,almacenamiento,fuente)
   
    }else{
        alert("Sos menor de Edad, no puedes acceder a mi pagina")
        return window.close()
    }
}


verificarEdad()