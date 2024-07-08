// Simulador de compras para calcular precio de juegos en USD a ARS con iva incluido
const dolarTarjeta = 1475; // Dolar tarjeta
const iva = 0.21; // 21% de IVA 
let nombreUsuario = ""; // nombre de usuario

// jueguitos
const juegosPopulares = [
    { nombre: "The Witcher 3: Wild Hunt", precioUsd: 39.99 },
    { nombre: "Cyberpunk 2077", precioUsd: 59.99 },
    { nombre: "Red Dead Redemption 2", precioUsd: 49.99 },
    { nombre: "Doom Eternal", precioUsd: 29.99 },
    { nombre: "Resident Evil Village", precioUsd: 59.99 }
];

// funcion main
function iniciarSimulacion() {
    nombreUsuario = prompt("¡Bienvenido al simulador de compras en Steam!\nPor favor, ingrese su nombre:");

    if (!nombreUsuario) {
        alert("No ingresaste un nombre. Saliendo del simulador.");
        return;
    }

    alert("¡Hola " + nombreUsuario + "! Bienvenido al simulador de compras en Steam. ¡Comencemos!");

    while (true) {
        let opcion = prompt(
            "Opciones:\n" +
            "1. Agregar juego popular\n" +
            "2. Agregar compra personalizada\n" +
            "3. Finalizar simulación\n" +
            "Ingrese el número de la opción deseada:"
        );

        if (opcion === '1') {
            agregarJuegoPopular();
        } else if (opcion === '2') {
            agregarCompraPersonalizada();
        } else if (opcion === '3') {
            finalizarSimulacion();
            break;
        } else {
            alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
}

// funcion mostrar juegos populares
function mostrarJuegosPopulares() {
    let listaJuegos = "Juegos más solicitados:\n";
    juegosPopulares.forEach(function(juego, index) {
        listaJuegos += (index + 1) + ". " + juego.nombre + " - $" + juego.precioUsd.toFixed(2) + " USD\n";
    });
    return listaJuegos;
}

// funcion seleccionar juego
function agregarJuegoPopular() {
    let listaJuegos = mostrarJuegosPopulares();
    let numJuegos = parseInt(prompt(listaJuegos + "\nIngrese el número del juego popular que desea agregar:")) - 1;
    if (numJuegos >= 0 && numJuegos < juegosPopulares.length) {
        let juego = juegosPopulares[numJuegos];
        let precioEnArs = calcularPrecioArs(juego.precioUsd);
        alert(juego.nombre + ": El precio en ARS incluyendo impuestos es: $" + precioEnArs.toFixed(2));
    } else {
        alert("Número de juego no válido.");
    }
}

// calculo de iva
function calcularPrecioArs(precioUsd) {
    return (precioUsd * dolarTarjeta) * (1 + iva);
}

// funcion juego custom
function agregarCompraPersonalizada() {
    let precioUsd = parseFloat(prompt("Ingrese el precio en USD del juego que desea agregar:"));

    if (precioUsd > 0) {
        let precioEnArs = calcularPrecioArs(precioUsd);
        alert("Compra personalizada: El precio en ARS incluyendo impuestos es: $" + precioEnArs.toFixed(2));
    } else {
        alert("Por favor, ingrese un valor numérico válido mayor que cero para el precio.");
    }
}

// funcion fin
function finalizarSimulacion() {
    alert("¡Hasta luego, " + nombreUsuario + "! Saliendo del simulador.");
}


iniciarSimulacion();
