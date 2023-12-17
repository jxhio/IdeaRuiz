document.getElementById("cotizarBtn").addEventListener("click", function () {
    document.getElementById("formulario").style.display = "block";
});

document.getElementById("cancelarBtn").addEventListener("click", function () {
    document.getElementById("formulario").style.display = "none";
});

document.getElementById("cotizacionBtn").addEventListener("click", function () {
    const fechaNacimiento = new Date(
        document.getElementById("fechaNacimiento").value
    );
    const sexo = document.getElementById("sexo").value;
    const esFumador = document.getElementById("fumador").checked;

    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    let costo = 0;
    if (edad <= 20) {
        costo = 150;
    } else if (edad >= 21 && edad <= 49) {
        costo = 200;
    } else {
        costo = 300;
    }

    if (esFumador) {
        costo += 50;
    }

    if (sexo === "femenino") {
        costo -= 20;
    }

    const confirmacion = confirm(
        `El costo del seguro es: $${costo}. ¿Desea comprar el seguro?`
    );

    if (confirmacion) {
        const contacto = confirm(
        "Nos pondremos en contacto para solicitar algunos datos complementarios."
        );
    }

    formularioCotizacion.style.display = 'none';

});
