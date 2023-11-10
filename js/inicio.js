const divPolizas = document.getElementById("polizasGrid");
const btnIniciarSesion = document.getElementById("iniciar-sesion");
const btnRegistrar = document.getElementById("registrar");
const btnCerrarSesion = document.getElementById("cerrar-sesion");
const infoContainer = document.getElementById("infoContainer");
const polizasContainer = document.getElementById("polizasContainer");


export let polizasActivas = JSON.parse(localStorage.getItem("polizas"));
const usuarioLogeado = JSON.parse(sessionStorage.getItem("usuario"))



document.addEventListener("DOMContentLoaded", () => {

    if (usuarioLogeado === null) {
        btnIniciarSesion.style.display = "block";
        btnRegistrar.style.display = "block"
        btnCerrarSesion.style.display = "none"
        infoContainer.style.display = "block"
        polizasContainer.style.display = "none"
    } else{
        btnIniciarSesion.style.display = "none";
        btnRegistrar.style.display = "none"
        btnCerrarSesion.style.display = "block"
        infoContainer.style.display = "none"
        polizasContainer.style.display = "block"
        generarCardsPolizas(polizasActivas);
    }
})



/* document.addEventListener("DOMContentLoaded", () => {
    generarCardsPolizas(polizasActivas);
}); */

export const generarCardsPolizas = (polizas) => {
    divPolizas.innerHTML = "";

    polizas.forEach((poliza) => {
        const { aseguradora, ramo, vigenciaFin, frecPago, prima } = poliza;

        let card = document.createElement("div");
        card.className = "poliza";
        card.innerHTML = `
        <div class="col">
        <div class="card m-2">
        <div class="card-body">
        <p class="card-title">${ramo}</p>
        <p class="card-subtitle">${aseguradora}</p>
        <p class="card-text">${vigenciaFin}</p>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${frecPago}</li>
        <li class="list-group-item">${prima}</li>
        </ul>
        </div>
        </div>
        </div>`;

        divPolizas.appendChild(card);
    });
};


