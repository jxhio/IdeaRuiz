const btnIniciarSesion = document.getElementById("btnIniciarSesion")
const btnRegistrarte = document.getElementById("btnRegistrarte")
const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form")


let usuarios = JSON.parse(localStorage.getItem("usuarios"))


class newUser{
    constructor(user, pass, name){
        this.id = usuarios.length + 1
        this.user = user
        this.pass = pass
        this.name = name
    }
}

btnIniciarSesion.addEventListener("click", (e) => {
    e.preventDefault()

    const user = document.getElementById("user").value
    const pass = document.getElementById("pass").value

    validarYlogear(user, pass)

})


const validarYlogear = (user, pass) => {
    const userExiste = usuarios.find((usuario) => usuario?.user === user);

    if (userExiste === undefined || userExiste.pass !== pass) {
        console.log("Usuario no definido")
        
        alert("Usuario inexistente o contraseña erronea");
    } else {
        console.log("Usuario encontrado:", userExiste)
        let usuario = {
            user: userExiste.user,
            pass: userExiste.pass,
            name: userExiste.name,
        };
        sessionStorage.setItem("usuario", JSON.stringify(usuario));
        console.log("Usuario almacenado en sessionStorage:", usuario)
        location.href = "../index.html";
        console.log("Redirigiendo a la página principal...");

    }
};



btnRegistrarte.addEventListener("click", (e) => {
    e.preventDefault()

    const user = document.getElementById("newUser").value
    const pass = document.getElementById("newPass").value
    const name = document.getElementById("newName").value

    const nuevoUsuario = new newUser(user, pass, name)

    validarYRegistrar(nuevoUsuario)
})


const validarYRegistrar = (nuevoUsuario) => {

    const userNuevo = usuarios.find((usuario) => usuario?.user === nuevoUsuario.user)
    if(userNuevo === undefined){

        usuarios.push(nuevoUsuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario))
        location.href = "../index.html"       
    }else{
        alert(`El usuario ya existe`)
    }

}