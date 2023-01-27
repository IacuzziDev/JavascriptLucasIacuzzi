function simuladorDeIntereses(montoPrestamo, cantidadMeses) {
    const tasaInteres = 0.12;
    let montoTotal = montoPrestamo;
    for (let i = 0; i < cantidadMeses; i++) {
    montoTotal += montoTotal * tasaInteres;
    }
    return montoTotal;
}

function datosPrestamos() {
    const sueldoMinimo = 100000;
    const nombre = prompt("Ingresa tu nombre:");
    const apellido = prompt("Ingresa tu apellido:");
    const sueldo = parseFloat(prompt("Ingresa tu ingreso mensual:"));
    if (sueldo >= sueldoMinimo) {
    let calcularOtroPrestamo = true;
    while (calcularOtroPrestamo) {
        const montoPrestamo = parseFloat(
        prompt("Ingresa el monto del préstamo:")
        );
        const cantidadMeses = parseInt(
        prompt("Ingresa el número de meses de retraso:")
        );
        const montoTotal = simuladorDeIntereses(montoPrestamo, cantidadMeses);
        alert(
        `Hola ${nombre} ${apellido}, el monto total a pagar por el préstamo es de ${montoTotal}`
        );
        calcularOtroPrestamo = confirm("Desea realizar otra simulacion?");
    }
    } else {
    alert(
        "Lo sentimos, tu ingreso mensual es insuficiente para acceder al préstamo"
    );
    }
}

datosPrestamos();
