


// ! Preentrega Final =


fetch("./productos.json")
.then((resp)=>  resp.json())
.then( data =>{
   productos = data
   cargaDeProductos(productos)
})


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
        check.checked ? password.type = "text" : password.type = "password"
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
actualizarNumber()

function agregarAlCarrito() {
    const botonCarrito = document.querySelectorAll(".button-target");
    botonCarrito.forEach(boton => {
        boton.addEventListener("click", agregarCarrito);
        boton.addEventListener("click", ()=>{
            Toastify({
                text: "Producto Agregado",
                duration: 3000,
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, rgb(210, 209, 209)  , rgb(213, 188, 253) ) ",
                  margin:" 60px 40px"
                },// Callback after click
              }).showToast();
        });
       
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
            Toastify({
                text: "Producto Eliminado",
                duration: 3000,
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, rgb(210, 209, 209)  , rgb(213, 188, 253) ) ",
                  margin:" 60px 40px"
                },// Callback after click
              }).showToast();
            
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
        const total = totalCarrito.innerText
        Swal.fire({
            title: "Pago realizado con éxito. ", 
            text: `¡Gracias por tu compra de ${total}!  `,
            icon: "success",
            confirmButtonText: "Aceptar",
            confirmButtonColor:"rgb(213, 188, 253)"
          });
        productosEnCarrito = [];
        localStorage.removeItem("productos-carrito-conteiner");

        actualizarNumber();
        actualizarCarrito();
    } else {
        alert("El carrito está vacío. Agrega productos antes de pagar.");
    }
});


