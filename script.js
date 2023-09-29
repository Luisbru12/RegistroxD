// script.js

// JSON array to store user data
let usuarios = [
    {
        nombre: "carlos",
    apellido: "martinez",
    direccion: "calle 8",
    identificacion: "987654321",
    edad: 30,
    sexo: "masculino",
    email: "carlos@example.com",
    telefono: "9876543210"
},
{
    nombre: "juan",
    apellido: "sanchez",
    direccion: "calle 10",
    identificacion: "456789123",
    edad: 28,
    sexo: "masculino",
    email: "juan@example.com",
    telefono: "4567891230"
},
{
    nombre: "pedro",
    apellido: "gomez",
    direccion: "calle 12",
    identificacion: "321654987",
    edad: 35,
    sexo: "masculino",
    email: "pedro@example.com",
    telefono: "3216549870"
},
{
    nombre: "miguel",
    apellido: "rodriguez",
    direccion: "calle 14",
    identificacion: "789321654",
    edad: 27,
    sexo: "masculino",
    email: "miguel@example.com",
    telefono: "7893216540"
},
{
    nombre: "azael",
    apellido: "martinez",
    direccion: "calle 22",
    identificacion: "31234233245",
    edad: 22,
    sexo: "masculino",
    email: "azael@example.com",
    telefono: "42343242342"
}
];



const registrarUsuario = () => {
    // Get the input values
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let direccion = document.getElementById("Direccion").value;
    let identificacion = document.getElementById("Identificacion").value;
    let edad = document.getElementById("Edad").value;
    let sexo = document.getElementById("Sexo").value;
    let email = document.getElementById("Email").value;
    let telefono = document.getElementById("Telefono").value;


    if (nombre === "" || apellido === "" || direccion === "" || identificacion === "" || edad === "" || email === "" || telefono === "") {
        // Mostrar un mensaje de alerta si algún campo está vacío
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            Por favor, complete todos los campos.
        `;

        // Insertar el elemento de alerta antes del elemento "Nombre"
        const nombreElement = document.getElementById("Nombre");
        nombreElement.insertAdjacentElement("beforebegin", alertElement);

        alertElement.querySelector('.btn-close').addEventListener('click', function () {
            alertElement.remove();
        });

        return; // Salir de la función temprano
    }
    

    

    if (!/^\d+$/.test(identificacion)) {
        // Mostrar un mensaje de alerta si el campo de identificación contiene letras
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            El campo de identificación solo acepta números.
        `;

        // Insertar el elemento de alerta antes del elemento "Identificacion"
        const identificacionElement = document.getElementById("Identificacion");
        identificacionElement.insertAdjacentElement("beforebegin", alertElement);

        alertElement.querySelector('.btn-close').addEventListener('click', function () {
            alertElement.remove();
        });

        return; // Salir de la función temprano
    }

    if (!/^\d+$/.test(edad)) {
        // Show an alert message if the edad field is not a number
        alert("El campo de edad solo acepta números.");
        return; // Exit the function early
    }

    // Check if the user with the same name and last name is already registered
    let isAlreadyRegistered = usuarios.some(usuario => {
        return usuario.nombre === nombre && usuario.apellido === apellido;
    });

    if (isAlreadyRegistered) {
        // Show an alert message if the user is already registered
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.textContent = "Este usuario ya está registrado.";
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
        return; // Exit the function early
    }

    let isAlreadyRegistered1 = usuarios.some(usuario => {
        return usuario.identificacion === identificacion && usuario.identificacion === identificacion;
    });

    if (isAlreadyRegistered1) {
        // Show an alert message if the user is already registered
        let alertElement = document.createElement("div");
        alertElement.classList.add("alert", "alert-danger");
        alertElement.textContent = "Esta identificacion ya está registrada.";
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
        return; // Exit the function early
    }

    // Create a new user object
    let usuario = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        identificacion: identificacion,
        edad: edad,
        sexo: sexo,
        email: email,
        telefono: telefono
    };

    // Add the user object to the usuarios array
    usuarios.push(usuario);

    // Clear the input fields
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Direccion").value = "";
    document.getElementById("Identificacion").value = "";
    document.getElementById("Edad").value = "";
    document.getElementById("Sexo").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Telefono").value = "";

    let alertElement = document.createElement("div");
    alertElement.classList.add("alert", "alert-success");
    alertElement.innerHTML = `
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       Usuario registrado con éxito!
    `;

    const nombreElement = document.getElementById("Nombre");
    nombreElement.insertAdjacentElement("beforebegin", alertElement);

    alertElement.querySelector('.btn-close').addEventListener('click', function () {
        alertElement.remove();
    });
};

const listarUsuarios = () => {
    // Verificar si hay usuarios registrados
    if (usuarios.length === 0) {
        const alerta = document.createElement("div");
        alerta.classList.add("alert", "alert-danger");
        alerta.textContent = "No hay usuarios registrados.";
        document.getElementById("Nombre").insertAdjacentElement("beforebegin", alertElement);
        return;
    }

    // Convertir el array de usuarios a una cadena JSON
    const usuariosJSON = JSON.stringify(usuarios);

    // Codificar la cadena JSON para que sea segura en una URL
    const usuariosEncoded = encodeURIComponent(usuariosJSON);

    // Redirigir a la página "tablaregistro.html" con los datos como parámetro de la URL
    window.location.href = `tablaregistro.html?datos=${usuariosEncoded}`;
};

 