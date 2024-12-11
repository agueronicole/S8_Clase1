

let moneda = prompt('Ingrese la moneda');
moneda = parseInt(moneda);

let opcion = prompt(`
    ================================
    1. Gaseosa: S/ 4.00
    2. Papitas: S/ 2.00
    3. Oreo: S/ 1.00
    4. Chupetin: S/ 3.00
    ================================
    INGRESA UNA OPCIÓN:
`)

let precio = 0
if (opcion === '1'){
    precio = 4
}
if (opcion === '2'){
    precio = 2
}
if (opcion === '3'){
    precio = 1
}
if (opcion === '4'){
    precio = 3
}

const vuelto = moneda - precio;

if (vuelto >= 0){
    alert('TU VUELTO ES: ' + vuelto)
} else {
    alert('NO TIENES SALDO')
}