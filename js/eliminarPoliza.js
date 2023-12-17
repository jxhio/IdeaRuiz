import { generarCardsPolizas, polizasActivas } from "./inicio.js";

const btnEliminar = document.getElementById(`eliminar${id}`)

btnEliminar.addEventListener("click", () => eliminarProducto(id))

const eliminarProducto = (id) => {

    const polizaEliminar = polizasActivas.findIndex(( poliza ) => poliza.id === id)
    polizasActivas.splice(polizaEliminar, 1)
    localStorage.setItem("polizas", JSON.stringify(polizasActivas))
    generarCardsPolizas(JSON.parse(localStorage.getItem("polizas")))  

}