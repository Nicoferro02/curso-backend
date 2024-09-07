

// ! Preentrega numero 1

// function solicitarEdad (){
//     let edad;
//     do{ 
//      edad = prompt("Decime tu edad")
//         if(!edad || isNaN(edad) || parseInt(edad) <= 0 || parseInt(edad) >= 100){
//             alert("Decime una edad valida, por favor")
//         }

//     }while(!edad || isNaN(edad) || parseInt(edad) <= 0 || parseInt(edad) >= 100)
//     return parseInt(edad)
// }

// function solicitarProcesador(){
//     let procesador;
//     do{
//         procesador = prompt("Elije un procesador:\n AMD o INTEL").toLowerCase()
//         if(procesador!== "intel" && procesador !== "amd"){
//             alert("elije una opcion correcta")
//         }

//     }while(procesador!== "intel" && procesador !== "amd")
//         return procesador

// }


// function solicitarAlmacenamiento(){
//     let almacenamiento;

//     do{
//         almacenamiento = prompt("ELije una SSD de 500GB o 1TB").toLowerCase()

//         if(almacenamiento !== "500gb" && almacenamiento !== "1tb"){
//             alert("Tu eleccion es invalida")
//         }
//     }
//     while(almacenamiento !== "500gb" && almacenamiento !== "1tb"){

//     }   

//     return almacenamiento

// }

// function solicitarRefrigeracion (){
//     let refrigeracion;
//     do{
//         refrigeracion = prompt("Elije entre Refrigeracion por Cooler o Liquida").toLowerCase()
//         if( refrigeracion !== "cooler" && refrigeracion !== "liquida"){
//             alert("Escribe una respuesta valida por favor")
//         }
//     }while(refrigeracion !== "cooler" && refrigeracion !== "liquida")
//     return refrigeracion
// }



// function solicitarVideo(){
//     let video;
//     do{
//         video = prompt("Que placa de video te interesa?\n Radeon o Nvidia").toLowerCase()
//         if(video !== "radeon" && video !== "nvidia"){
//             alert("Elije una opcion correcta")
//         } 
//     }while(video !== "radeon" && video !== "nvidia")

//     return video
// }


// function solicitarMother(){
//     let mother;
//     do{
//         mother = prompt("Elije una mother\n ASUS O ASROCK").toLowerCase()

//         if(mother !== "asus" && mother !== "asrock"){
//             alert("Elije una opccion correcta")
//         }
//     }while(mother !== "asus" && mother !== "asrock")

//     return mother
// }

// function solicitarFuente(){
//     let fuente;
//     do{
//         fuente =prompt("Elije una fuente \n 500w o 1000w").toLowerCase()
//         if(fuente !== "500w" && fuente !== "1000w"){
//             alert("Elije una opccion correcta")
//         }
//     }while(fuente !== "500w" && fuente !== "1000w")

//     return fuente
// }


// function verificarEdad(){

//     let edad = solicitarEdad()

//     if(edad >= 18){
//         alert("Sos mayor de EDAD, tienes acceso a la pagina")

//         let nombre = prompt("Como te llamas?")

//         let apellido= prompt("Decime tu apellido")
//         alert("Bienvenido " + nombre + " " + apellido + ", Empezemos a Armar la pc !")

//         let procesador = solicitarProcesador();
//         let refrigeracion = solicitarRefrigeracion();
//         let mother = solicitarMother();
//         let video = solicitarVideo();
//         let almacenamiento = solicitarAlmacenamiento();
//         let fuente = solicitarFuente();

//         function pcArmada(p,r,m,v,a,f){
//             alert("Tu PC va a llevar los siguientes componentes\n" +
//                 "Procesador: " + procesador + "\n" + 
//                 "refrigeracion: " + refrigeracion + "\n" + 
//                 "mother: " + mother + "\n" + 
//                 "video: " + video + "\n" + 
//                 "almacenamiento: " + almacenamiento + "\n" + 
//                 "fuente: " + fuente + "\n"
//              )
//         }

//         pcArmada(procesador,refrigeracion,mother,video,almacenamiento,fuente)

//     }else{
//         alert("Sos menor de Edad, no puedes acceder a mi pagina")
//         return window.close()
//     }
// }


// verificarEdad()


// ! Preentrega 2 = 

const productos = [
    {   
        id:"Monitor-01",
        titulo: "MONITOR SAMSUNG 24'' 75hz",
        img: "./img/shopping.webp",
        categoria:{
            nombre: "Perisfericos",
            id:"Monitor"
        },
        precio: "$120.000",
    },
    {
        id: "Gabinete-01",
        titulo: "GABINETE SOLARMAX TG C/6 COOLER",
        img: "./img/gabinete-solarmax-tg-c6-cooler-rgb-white-cm5920-0.jpg",
        categoria:{
            nombre: "Gabinetes",
            id:"Gabinetes"
        },
        precio: "$70.000",
    },
    {
        id: "Procesador-01",
        titulo: "PROCESADOR RYZEN 5 7600X C/VIDEO",
        img: "./img/micro-amd-ryzen-5-7600x-cvideo-scooler-am5-0.jpg",
        categoria:{
            nombre: "Procesadores",
            id:"AMD"
        },
        precio: "$327.000",
    },
    {
        id: "Memoria-RAM-01",
        titulo: "MEMORIA 16GB DDR5 KINGSTON FURY RGB",
        img: "./img/memoria-16gb-ddr5-5600-kingston-fury-beast-rgb-0.jpg",
        categoria:{
            nombre: "Memorias",
            id:"RAM"
        },
        precio: "$80.000",
    },
    {
        id: "Fuente-01",
        titulo: "FUENTE 700W EVGA 80 PLUS BRONCE",
        img: "./img/fuente-700w-evga-br-80-bronze-0.jpg",
        categoria:{
            nombre: "Fuente",
            id:"Fuente"
        },
        precio: "$122.900",
    },
    {
        
        id: "Placa-01",
        titulo: "PLACA DE VIDEO RTX 4060TI GIGABYTEO",
        img: "./img/video-geforce-rtx-4060-ti-gigabyte-windforce-oc-8g-gddr6-0.jpg",
        categoria:{
            nombre: "Placa-Video",
            id:"Nvidia"
        },
        precio:"$617.400"
    }, 
    {
        id: "Mouse-01",
        titulo: "MOUSE LOGITECH G PRO X SUPERLIGHT WHITE",
        img: "./img/mouse-logitech-g-pro-x-superlight-white-910005941-0.jpg",
        categoria:{
            nombre: "Perisfericos",
            id:"Mouse"
        },
        precio: " $123.200",
    },
    {
        id: "Mother-01",
        titulo: "MOTHER ASUS B650MA WIFI AM5",
        img: "./img/mother-asus-prime-b650ma-wifi-ii-ddr5-am5-0.jpg",
        categoria:{
            nombre: "Placa-Madre",
            id:"Placa-Madre"
        },
        precio: "$216.000 ",
    },
    {
        id: "Placa-Wifi-01",
        titulo: "PLACA DE RED TP-LINK 1300MB",
        img: "./img/placa-wifi-pcie-tplink-archer-t6e-ac1300mb-dual-band-0.jpg",
        categoria:{
            nombre: "Perisfericos",
            id:"Placa-Wifi"
        },
        precio: "$76.340 ",
    },
    {
        id: "CoolerFan-01",
        titulo: "COOLER FAN AEROCOOL RGB",
        img: "./img/cooler-fan-aerocool-eclipse-12-rgb-para-gabinete-0.jpg",
        categoria:{
            nombre: "Refrigeracion",
            id:"Cooler"
        },
        precio: "$12.619 ",
    },
    {
        id: "Memoria-SSD-01",
        titulo: "MEMORIA SSD 1TB KINGSTON M.2",
        img: "./img/hd-ssd-1tb-kingston-snvs-nv2-m2-nvme-gen4-3500mbs-2280-0.jpg",
        categoria:{
            nombre: "Memorias",
            id:"SSD"
        },
        precio: "$92.350",
    },
    {
        id: "Teclado-01",
        titulo: "TECLADO REDRAGON HORUS TKL WIRELESS",
        img: "./img/compragamer_Imganen_general_37639_Teclado_Mecanico_Redragon_Horus_K621W_White_RGB_TKL_Low_Profile_Switch_Red_Wireless_1a510a9f-med.jpg",
        categoria:{
            nombre: "Perisfericos",
            id:"Teclado"
        },
        precio: "$73.456  ",
    },
    {
        id: "Auricular-01",
        titulo: "AURICULAR WIRELESS CON MICROFONO LOGITECH VIBE 100",
        img: "./img/cooler-fan-aerocool-eclipse-12-rgb-para-gabinete-0.jpg",
        categoria:{
            nombre: "Perisfericos",
            id:"Auriculares"
        },
        precio: "$162.304  ",
    },
    {
        id: "Silla-01",
        titulo: "SILLA GAMER AK RACING GAMING CHAIR",
        img: "./img/compragamer_Imganen_general_19144_Silla_Gamer_AK-Racing_Gaming_Chair_OCTANE_Red__Peso_MAX._150kg__17df5120-med.jpg",
        categoria:{
            nombre: "Perisfericos",
            id:"Sillas"
        },
        precio: "$435.654",
    },
    {
        id: "Procesador-02",
        titulo: "PROCESADOR INTEL CORE I5 10400F 4.3GHZ",
        img: "./img/compragamer_Imganen_general_18900_Procesador_Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake_e07a1d28-med.jpg",
        categoria:{
            nombre: "Procesadores",
            id:"Intel"
        },
        precio: "$152.342",
    },

]

const contenedor = document.getElementById("target")

function cargaDeProductos(productos) {

    contenedor.innerHTML="";

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `<img src="${producto.img}" alt="">
            <div>
                <h2>${producto.titulo}</h2>
                 <p>${producto.precio}</p>
            </div>
            <button class="button-target"><i class="fa-solid fa-cart-shopping  "></i>Añadir al Carrito</button>`
            contenedor.append(div)
    })

    
}

cargaDeProductos(productos)