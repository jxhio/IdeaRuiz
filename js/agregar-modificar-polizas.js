import { generarCardsPolizas, polizasActivas } from "./inicio";

const agregarPoliza = document.getElementById("agregarPoliza");
const editarPolizas = document.getElementById("editarPolizas");
const agregarPolizas = document.getElementById("formAgregar")
const divPolizas = document.getElementById("polizasGrid");




export const eliminarPoliza = (id) => {

    const polizaEliminar = polizasActivas.findIndex(( poliza ) => poliza.id === id)
    polizasActivas.splice(polizaEliminar, 1)
    localStorage.setItem("polizas", JSON.stringify(polizasActivas))
    generarCardsPolizas(JSON.parse(localStorage.getItem("polizas")))  

}

class Polizas {
    constructor(aseguradora, ramo, suma, vigenciaInicio, vigenciaFin, frecPago, prima){
        this.id = generarId()
        this.aseguradora = aseguradora
        this.ramo = ramo
        this.suma = suma
        this.vigenciaInicio = vigenciaInicio
        this.vigenciaFin = vigenciaFin
        this.frecPago = frecPago
        this.prima = prima
    }
}

const generarId = () => {
    const id = polizasActivas.map((poliza) => { return poliza.id })

    const max = Math.max(...id) + 1
    return max
}


/* AGREGAR POLIZAS */

export const generarVistaAgregar =() => {

    console.log("Se hizo clic en 'Agregar póliza'");

    agregarPolizas.innerHTML = ""

    agregarPolizas.style.display = "block"
    
    const form = document.createElement("form")

    form.innerHTML = `
    <div>
        <label for="aseguradora">Aseguradora:</label>
        <input type="text" name="" id="aseguradora" />
    </div>
    <div>
        <label for="ramo">Ramo:</label>
        <input type="text" name="" id="ramo" />
    </div>
    <div>
        <label for="suma">Suma asegurada:</label>
        <input type="text" name="" id="suma" />
    </div>
    <div>
        <label for="vigenciaInicio">Inicio de Vigencia:</label>
        <input type="text" name="" id="vigenciaInicio" />
    </div>
    <div>
        <label for="vigenciaFin">Fin de vigencia:</label>
        <input type="text" name="" id="vigenciaFin" />
    </div>
    <div>
        <label for="frecPago">Frecuencia de Pago:</label>
        <input type="text" name="" id="frecPago" />
    </div>
    <div>
        <label for="prima">Prima:</label>
        <input type="text" name="" id="prima" />
    </div>
    <button id="añadir" class="btn btn-primary" type="button">Añadir</button>
    <button id="cerrar" class="btn btn-danger" type="button"> X Cerrar</button>
    `
    agregarPolizas.appendChild(form)

    const btnCargar = document.getElementById("añadir")
    btnCargar.addEventListener("click", (e) => {
        e.preventDefault()
        guadarPoliza()
    })
    const btnCerrar = document.getElementById("cerrar")
    btnCerrar.addEventListener("click", (e) => {
        agregarPolizas.style.display = "none"
    })


    const guadarPoliza = () => {

        const aseguradora = agregarPolizas.children[0][0].value
        const ramo = agregarPolizas.children[0][1].value  
        const suma = agregarPolizas.children[0][2].value  
        const vigenciaInicio = agregarPolizas.children[0][3].value  
        const vigenciaFin = agregarPolizas.children[0][4].value 
        const frecPago = agregarPolizas.children[0][5].value  
        const prima = agregarPolizas.children[0][6].value 
        const id = agregarPolizas.children[0][7].value  
    
        if(aseguradora !== "" && ramo !== "" && suma !== "" && vigenciaInicio !== "" && vigenciaFin !== "" && frecPago !== "" && prima !== "" && id !== ""){
            const nuevaPoliza = new Polizas(aseguradora, ramo, suma, vigenciaInicio, vigenciaFin, frecPago, prima)
    
            polizasActivas.push(nuevoPoliza)
    
            localStorage.setItem("polizas", JSON.stringify(polizasActivas))
    
            agregarPolizas.style.display = "none"
    
            generarCardsPolizas(polizasActivas)
    
    
        }else{
            alert("Algunos campos no estan completos")
        }
    }

    document.getElementById("agregarPoliza").addEventListener("click", () => {
        generarVistaAgregar();
    });
};






editarPolizas.addEventListener("click", () => {modificarPolizasCard()})

const modificarPolizasCard = () => {

    divPolizas.innerHTML = "";

    polizasActivas.forEach((poliza) => {
      let card = document.createElement("div");
      card.className = "producto";
      card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <p>Aseguradora: <input type="text" value="${poliza.aseguradora}"></p>
        <p>Ramo: <input type="text" value="${poliza.ramo}"></p>
        <p>Suma Asegurada: <input type="text" value="${poliza.suma}"></p>
        <p>Inicio de Vigencia: <input type="text" value="${poliza.vigenciaInicio}"></p>
        <p>Fin de Vigencia: <input type="text" value="${poliza.vigenciaFin}"></p>
        <p>Frecuencia de Pago: <input type="text" value="${poliza.frecPago}"></p>
        <p>Prima: <input type="text" value="${poliza.prima}"></p>
        <div class="card-body">
        <button id="boton${poliza.id}" class="btn btn-success">Modificar</button>
        <button id="cancelar${poliza.id}" class="btn btn-danger">Cancelar</button>
        </div>
    
        </div>`;
  
      divPolizas.appendChild(card);
      const btnAceptar = document.getElementById(`boton${poliza.id}`)
      const btnCancelar = document.getElementById(`cancelar${poliza.id}`)
  
      btnAceptar.addEventListener("click", (e) => modificarPolizas(e,poliza.id))
      btnCancelar.addEventListener("click", () => generarCardsPolizas(polizasActivas))
    });
  

}



const modificarPolizas = (e, id) => {
    const polizaIndice = polizasActivas.findIndex((poliza) => poliza.id === id)

    const aseguradora =  e.target.parentElement.parentElement.children[1].children[0].value
    const ramo = e.target.parentElement.parentElement.children[2].children[0].value    
    const suma = e.target.parentElement.parentElement.children[3].children[0].value    
    const vigenciaInicio = e.target.parentElement.parentElement.children[4].children[0].value    
    const vigenciaFin = e.target.parentElement.parentElement.children[5].children[0].value   
    const frecPago = e.target.parentElement.parentElement.children[6].children[0].value    
    const prima = e.target.parentElement.parentElement.children[7].children[0].value   

    polizasActivas[polizaIndice].aseguradora = aseguradora
    polizasActivas[polizaIndice].ramo = ramo
    polizasActivas[polizaIndice].suma = suma
    polizasActivas[polizaIndice].vigenciaFin = vigenciaFin
    polizasActivas[polizaIndice].frecPago = frecPago
    polizasActivas[polizaIndice].prima = prima


    localStorage.setItem("polizas", JSON.stringify(polizasActivas))
    generarCardsPolizas(polizasActivas)

}