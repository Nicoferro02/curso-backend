


// ! Preentrega 2 = 

const productos = [
    {
        id: "Monitor-01",
        titulo: "MONITOR SAMSUNG 24'' 75hz",
        img: "./img/shopping.webp",
        categoria: {
            nombre: "Perisfericos",
            id: "Monitor"
        },
        precio: "120.000",
    },
    {
        id: "Gabinete-01",
        titulo: "GABINETE SOLARMAX TG C/6 COOLER",
        img: "./img/gabinete-solarmax-tg-c6-cooler-rgb-white-cm5920-0.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "Gabinetes"
        },
        precio: "70.000",
    },
    {
        id: "Procesador-01",
        titulo: "PROCESADOR RYZEN 5 7600X C/VIDEO",
        img: "./img/micro-amd-ryzen-5-7600x-cvideo-scooler-am5-0.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "AMD"
        },
        precio: "327.000",
    },
    {
        id: "Memoria-RAM-01",
        titulo: "MEMORIA 16GB DDR5 KINGSTON FURY RGB",
        img: "./img/memoria-16gb-ddr5-5600-kingston-fury-beast-rgb-0.jpg",
        categoria: {
            nombre: "Memorias",
            id: "RAM"
        },
        precio: "80.000",
    },
    {
        id: "Fuente-01",
        titulo: "FUENTE 700W EVGA 80 PLUS BRONCE",
        img: "./img/fuente-700w-evga-br-80-bronze-0.jpg",
        categoria: {
            nombre: "Fuente",
            id: "Fuente"
        },
        precio: "122.900",
    },
    {

        id: "Placa-01",
        titulo: "PLACA DE VIDEO RTX 4060TI GIGABYTE",
        img: "./img/video-geforce-rtx-4060-ti-gigabyte-windforce-oc-8g-gddr6-0.jpg",
        categoria: {
            nombre: "Placa-Video",
            id: "Nvidia"
        },
        precio: "617.400"
    },
    {
        id: "Mouse-01",
        titulo: "MOUSE LOGITECH G PRO X SUPERLIGHT WHITE",
        img: "./img/mouse-logitech-g-pro-x-superlight-white-910005941-0.jpg",
        categoria: {
            nombre: "Perisfericos",
            id: "Mouse"
        },
        precio: "123.200",
    },
    {
        id: "Mother-01",
        titulo: "MOTHER ASUS B650MA WIFI AM5",
        img: "./img/mother-asus-prime-b650ma-wifi-ii-ddr5-am5-0.jpg",
        categoria: {
            nombre: "Placa-Madre",
            id: "Placa-Madre"
        },
        precio: "216.000 ",
    },
    {
        id: "Placa-Wifi-01",
        titulo: "PLACA DE RED TP-LINK 1300MB",
        img: "./img/placa-wifi-pcie-tplink-archer-t6e-ac1300mb-dual-band-0.jpg",
        categoria: {
            nombre: "Perisfericos",
            id: "Placa-Wifi"
        },
        precio: "76.340 ",
    },
    {
        id: "CoolerFan-01",
        titulo: "COOLER FAN AEROCOOL RGB",
        img: "./img/cooler-fan-aerocool-eclipse-12-rgb-para-gabinete-0.jpg",
        categoria: {
            nombre: "Refrigeracion",
            id: "Cooler"
        },
        precio: "12.619 ",
    },
    {
        id: "Memoria-SSD-01",
        titulo: "MEMORIA SSD 1TB KINGSTON M.2",
        img: "./img/hd-ssd-1tb-kingston-snvs-nv2-m2-nvme-gen4-3500mbs-2280-0.jpg",
        categoria: {
            nombre: "Memorias",
            id: "SSD"
        },
        precio: "92.350",
    },
    {
        id: "Teclado-01",
        titulo: "TECLADO REDRAGON HORUS TKL WIRELESS",
        img: "./img/compragamer_Imganen_general_37639_Teclado_Mecanico_Redragon_Horus_K621W_White_RGB_TKL_Low_Profile_Switch_Red_Wireless_1a510a9f-med.jpg",
        categoria: {
            nombre: "Perisfericos",
            id: "Teclado"
        },
        precio: "73.456  ",
    },
    {
        id: "Auricular-01",
        titulo: "AURICULAR WIRELESS CON MICROFONO LOGITECH VIBE 100",
        img: "./img/cooler-fan-aerocool-eclipse-12-rgb-para-gabinete-0.jpg",
        categoria: {
            nombre: "Perisfericos",
            id: "Auriculares"
        },
        precio: "162.304  ",
    },
    {
        id: "Silla-01",
        titulo: "SILLA GAMER AK RACING GAMING CHAIR",
        img: "./img/compragamer_Imganen_general_19144_Silla_Gamer_AK-Racing_Gaming_Chair_OCTANE_Red__Peso_MAX._150kg__17df5120-med.jpg",
        categoria: {
            nombre: "Perisfericos",
            id: "Sillas"
        },
        precio: "435.654",
    },
    {
        id: "Procesador-02",
        titulo: "PROCESADOR INTEL CORE I5 10400F 4.3GHZ",
        img: "./img/compragamer_Imganen_general_18900_Procesador_Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake_e07a1d28-med.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "Intel"
        },
        precio: "152.342",
    },
    {

        id: "Placa-02",
        titulo: "PLACA DE VIDEO AMD RX 6600XT 8Gb GDDR6",
        img: "./img/placa-de-video-amd-rx-6600xt-8gb-gddr61-18f0e0545824ff4b6e16345782237728-1024-1024.png",
        categoria: {
            nombre: "Placa-Video",
            id: "Radeon"
        },
        precio: "580.150"
    },
    {
        id: "CoolerLiquida-01",
        titulo: " Cooler MasterLiquid ML240L Core ARGB White Water Cooler",
        img: "./img/compragamer_Imganen_general_37843_Cooler_CPU_Cooler_Master_MasterLiquid_ML240L_Core_ARGB_White_Water_Cooler_5dd82d3b-grn.jpg",
        categoria: {
            nombre: "Refrigeracion",
            id: "Liquida"
        },
        precio: "168.619 ",
    },
    {
        id: "Memoria-HDD-01",
        titulo: "Disco Rigido Seagate 1TB SkyHawk 256MB 5.4K RPM",
        img: "./img/compragamer_Imganen_general_40373_Disco_Rigido_Seagate_1TB_SkyHawk_256MB_5.4K_RPM_8303511a-grn.jpg",
        categoria: {
            nombre: "Memorias",
            id: "HDD"
        },
        precio: "56.330",
    }
]
const contenedor = document.getElementById("target");
const todosProducto = document.querySelector("#todosProductos");

function parsePrecio(precio) {
    return parseFloat(precio.replace(/\./g, '').replace(',', '.'));
}

function formatoPrecio(precio) {
    return `$${precio.toLocaleString('es-ES', { minimumFractionDigits: 0 })}`;
}
function cargaDeProductos(productos) {
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        const precioNumerico = parsePrecio(producto.precio);
        div.innerHTML = `<img src="${producto.img}" alt="">
            <div>
                <h2>${producto.titulo}</h2>
                <p>${formatoPrecio(precioNumerico)}</p>
            </div>
            <button class="button-target" id="${producto.id}"><i class="fa-solid fa-cart-shopping"></i>Añadir al Carrito</button>`;
        contenedor.append(div);
    });
    agregarAlCarrito();
}

cargaDeProductos(productos);

const botonesCategoria = document.querySelectorAll(".boton-categoria");

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id !== "todos") {
            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargaDeProductos(productoBoton);
        } else {
            cargaDeProductos(productos);
        }
    });
});

// Abrir y cerrar modal de Inicio de Sesion
const abrirModal = document.querySelector("#open");
const cerrarModal = document.querySelector("#close");
const fondo = document.querySelector("#fondo");
const targeta = document.querySelector(".content");

function modal() {
    abrirModal.addEventListener("click", () => {
        fondo.classList.add("active");
        targeta.style.transform = ("translateY(0)");
    });

    cerrarModal.addEventListener("click", () => {
        fondo.classList.remove("active");
        targeta.style.transform = ("translateY(-150vh)");
    });
}
modal();

// Mostrar y ocultar contraseña
const check = document.querySelector("#check");
const password = document.querySelector("#contraseña");

function mostrarContraseña() {
    check.addEventListener("change", () => {
        if (check.checked) {
            password.type = "text";
        } else {
            password.type = "password";
        }
    });
}

mostrarContraseña();

// Carrito
let iconCart = document.querySelector("#abrirCarrito");
let carrito = document.querySelector(".cart");
let cerrarCarrito = document.querySelector("#closed");

function carritoDiseño() {
    iconCart.addEventListener("click", () => {
        carrito.style.right = "0";
        carrito.style.transition = "1s";
    });

    cerrarCarrito.addEventListener("click", () => {
        carrito.style.right = "-500px";
        carrito.style.transition = ".5s";
    });
}
carritoDiseño();

const contenedorCarrito = document.querySelector("#carrito-producto");
const carritoVacio = document.querySelector("#carrito-vacio");
const number = document.querySelector("#number");
const carritoAccion = document.querySelector("#carrito-acciones");
const carritoPagado = document.querySelector("#carrito-pagado");
const conteinerCarrito = document.querySelector(".productos-carrito-conteiner");
const totalCarrito = document.querySelector("#total-carrito");

let productosEnCarrito = JSON.parse(localStorage.getItem("productos-carrito-conteiner")) || [];

function agregarAlCarrito() {
    const botonCarrito = document.querySelectorAll(".button-target");
    botonCarrito.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
    });
}

function agregarCarrito(e) {
    const idTarget = e.currentTarget.id;
    const agregarProducto = productos.find(producto => producto.id == idTarget);

    if (productosEnCarrito.some(producto => producto.id == idTarget)) {
        const indice = productosEnCarrito.findIndex(producto => producto.id == idTarget);
        productosEnCarrito[indice].cantidad++;
    } else {
        agregarProducto.cantidad = 1;
        productosEnCarrito.push(agregarProducto);
    }

    actualizarNumber();
    actualizarCarrito();
    localStorage.setItem("productos-carrito-conteiner", JSON.stringify(productosEnCarrito));
}

function actualizarNumber() {
    let numero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    number.innerText = numero;
}

function actualizarCarrito() {
    if (productosEnCarrito.length > 0) {
        conteinerCarrito.innerHTML = "";
        carritoVacio.classList.add("borrado");
        carritoAccion.classList.remove("borrado");
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            const precioNumerico = parsePrecio(producto.precio);
            const precioTotal = (precioNumerico * producto.cantidad);
            div.innerHTML = `
                <img src="${producto.img}" alt="">
                <div class="carrito-titulo">
                    <small>${producto.titulo}</small>
                </div>
                <div class="carrito-cantidad">
                    <i id="reducirCarrito-${producto.id}" class="fa-solid fa-minus"></i>
                    <p>${producto.cantidad}</p>
                    <i id="incrementarCarrito-${producto.id}" class="fa-solid fa-plus"></i>
                </div>
                <div class="carrito-precio">
                    <small>Precio</small>
                    <p>${formatoPrecio(precioTotal)}</p>
                </div>
                <button class="carrito-delete" id="${producto.id}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;

            conteinerCarrito.append(div);
        });

        eliminarDelCarrito();
        incrementarCarrito();
        reducirCarrito();
    } else {
        conteinerCarrito.innerHTML = "";
        carritoVacio.classList.remove("borrado");
        carritoAccion.classList.add("borrado");
    }
    actualizarTotal();
}

function actualizarTotal() {
    const total = productosEnCarrito.reduce((acc, producto) => acc + (parsePrecio(producto.precio) * producto.cantidad), 0);
    totalCarrito.innerText = formatoPrecio(total);
}

actualizarCarrito();

function eliminarDelCarrito() {
    const vaciarCarrito = document.querySelectorAll(".carrito-delete");
    
    vaciarCarrito.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const idProducto = e.currentTarget.id;
            productosEnCarrito = productosEnCarrito.filter(producto => producto.id != idProducto);

            localStorage.setItem("productos-carrito-conteiner", JSON.stringify(productosEnCarrito));
            actualizarNumber();
            actualizarCarrito();
        });
    });
}

function incrementarCarrito() {
    productosEnCarrito.forEach(producto => {
        const botonIncrementar = document.querySelector(`#incrementarCarrito-${producto.id}`);
        botonIncrementar.addEventListener("click", () => {
            producto.cantidad++;
            localStorage.setItem("productos-carrito-conteiner", JSON.stringify(productosEnCarrito));
            actualizarNumber();
            actualizarCarrito();
        });
    });
}

function reducirCarrito() {
    productosEnCarrito.forEach(producto => {
        const botonReducir = document.querySelector(`#reducirCarrito-${producto.id}`);
        botonReducir.addEventListener("click", () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                productosEnCarrito = productosEnCarrito.filter(p => p.id != producto.id);
            }
            localStorage.setItem("productos-carrito-conteiner", JSON.stringify(productosEnCarrito));
            actualizarNumber();
            actualizarCarrito();
        });
    });
}

// Función de simulación de pago
carritoPagado.addEventListener("click", () => {
    if (productosEnCarrito.length > 0) {
        alert("Pago realizado con éxito. ¡Gracias por tu compra de !");
        productosEnCarrito = [];
        localStorage.removeItem("productos-carrito-conteiner");

        actualizarNumber();
        actualizarCarrito();
    } else {
        alert("El carrito está vacío. Agrega productos antes de pagar.");
    }
});