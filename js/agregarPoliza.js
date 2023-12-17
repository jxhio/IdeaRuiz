import { generarCardsPolizas, polizasActivas } from "./inicio.js";


class newPoliza{
    constructor(id,aseguradora, ramo, suma, vigenciaInicio, vigenciaFin, frecPago, prima){
        this.id = generarId();
        this.aseguradora = aseguradora;
        this.ramo = ramo;
        this.suma = suma;
        this.vigenciaInicio = vigenciaInicio;
        this.vigenciaFin = vigenciaFin;
        this.frecPago = frecPago;
        this.prima = prima;
    }

}

const generarId = () => {
    const id = polizasActivas.map((poliza) => { return poliza.id })

    const max = Math.max(...id) + 1
    return max
}


document.getElementById("agregarPoliza").addEventListener("click", function () {
    document.getElementById("formulario-agregar").style.display = "block";
});

document.getElementById("cancelarBtnAgregar").addEventListener("click", function () {
    document.getElementById("formulario-agregar").style.display = "none";
});

document.getElementById("agregarNuevaPoliza").addEventListener("click", function () {
    
    const aseguradora = document.getElementById("aseguradora").value
    const ramo = document.getElementById("ramo").value
    const suma = document.getElementById("suma").value 
    const vigenciaInicio = document.getElementById("vigenciaInicio").value
    const vigenciaFin = document.getElementById("aseguradora").value
    const frecPago = document.getElementById("aseguradora").value
    const prima  = document.getElementById("aseguradora").value

    const nuevaPoliza = new newPoliza(aseguradora, ramo, suma, vigenciaInicio, vigenciaFin, frecPago, prima)

    polizasActivas.push(nuevaPoliza)

    localStorage.setItem("polizas", JSON.stringify(polizasActivas))

    document.getElementById("formulario-agregar").display = "none"<

    generarCardsPolizas(polizasActivas)

    document.getElementById("formulario-agregar").style.display = "none";
});