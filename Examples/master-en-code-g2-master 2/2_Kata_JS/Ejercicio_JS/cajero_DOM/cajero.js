var cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

function createAccount() {
  var nombre = document.getElementById("input-display3");
  nombre = nombre.value;
  console.log(nombre);
  var contrasena = document.getElementById("input-display4");
  contrasena = contrasena.value;
  console.log(contrasena);
  var saldo = document.getElementById("input-display5");
  saldo = saldo.value;
  console.log(saldo);
  newAccount = { nombre, contrasena, saldo };
  console.log(newAccount);
  cuentas.push(newAccount);
  console.log(cuentas);
}
//alert("funciona");
var cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

// for (let i = 0; i < cuentas.length; i++) {
//   cuenta = cuentas.split([i], [2]);
//   console.log(cuenta);
// }
// cuentas.forEach((nombre) => {
//   console.log(nombre);
// });
/*
crear FUNCION para verificar el nombre de la cuenta
*/

// function getNombre() {
//   var cliente = document.getElementById("fname");
//   cliente = cliente.value;
//   console.log("Lo que escribio el cliente es:" + cliente);
//   if (cliente === "Mali") {
//     alert("Hola " + cuentas[0].nombre);
//   } else if (cliente === "Gera") {
//     alert("Hola " + cuentas[1].nombre);
//   } else if (cliente === "Maui") {
//     alert("Hola " + cuentas[2].nombre);
//   } else {
//     alert("No has creado aun, una cuenta con nosotros");
//   }
// }

/*
crear FUNCION para verificar la contrasena de la cuenta
*/

// function getContrasena() {
//   var contrasena = document.getElementById("contrasena");
//   contrasena = contrasena.value;
//   if (contrasena === cuentas[0].password) {
//     alert(
//       "Hola " +
//         cuentas[0].nombre +
//         " continua con las operaciones que desees realizar"
//     );
//   } else if (contrasena === cuentas[1].password) {
//     alert(
//       "Hola " +
//         cuentas[1].nombre +
//         "continua con las operaciones que desees realizar"
//     );
//   } else if (contrasena === cuentas[2].password) {
//     alert(
//       "Hola " +
//         cuentas[2].nombre +
//         "continua con las operaciones que desees realizar"
//     );
//   } else {
//     alert(
//       "No has ingresado correctamente tu contrasena, puedes intentarlo de nuevo."
//     );
//   }
// }

/*
cree una FUNCION en la que verifica ambas credenciales de la cuenta
*/

function getVerified() {
  for (let i = 0; i < cuentas.length; i++) {
    var cliente = document.getElementById("fname");
    cliente = cliente.value;
    console.log(cliente);
    var contrasena = document.getElementById("contrasena");
    contrasena = contrasena.value;
    console.log(contrasena);
    if (cliente === cuentas[i].nombre) {
      i = i;
    } else if (cliente === "Gera") {
      i = 1;
    } else if (cliente === "Maui") {
      i = 2;
    } else if (cliente === "Federico") {
      i = 6;
    } else {
      console.log("No funciona");
    }
    console.log(i);
    if (cliente === cuentas[i].nombre && contrasena === cuentas[i].password) {
      alert(
        "Bienvenid@ " +
          cuentas[i].nombre +
          " tus credenciales fueron verificadas satisfactoriamente"
      );
    } else {
      alert("Revisa tus credenciales y vuelve a intentarlo");
    }
    return;
  }
}
//   var cliente = document.getElementById("fname");
//   cliente = cliente.value;
//   var contrasena = document.getElementById("contrasena");
//   contrasena = contrasena.value;

//   if (cliente === cuentas[0].nombre && contrasena === cuentas[0].password) {
//     alert(
//       "Bienvenid@ " +
//         cuentas[0].nombre +
//         " tus credenciales fueron verificadas satisfactoriamente"
//     );
//   } else if (
//     cliente === cuentas[1].nombre &&
//     contrasena === cuentas[1].password
//   ) {
//     alert(
//       "Bienvenid@ " +
//         cuentas[1].nombre +
//         " tus credenciales fueron verificadas satisfactoriamente"
//     );
//   } else if (
//     cliente === cuentas[2].nombre &&
//     contrasena === cuentas[2].password
//   ) {
//     alert(
//       "Bienvenid@ " +
//         cuentas[2].nombre +
//         " tus credenciales fueron verificadas satisfactoriamente"
//     );
//   } else {
//     alert("Revisa tus credenciales y vuelve a intentarlo");
//   }
// }

function getBalance() {
  for (let i = 0; i < cuentas.length; i++)
    var cliente = document.getElementById("fname");
  cliente = cliente.value;
  var contrasena = document.getElementById("contrasena");
  contrasena = contrasena.value;
  if (cliente === "Mali") {
    i = 0;
  } else if (cliente === "Gera") {
    i = 1;
  } else if (cliente === "Maui") {
    i = 2;
  } else {
    console.log("No funciona");
  }
  console.log(i);
  if (cliente === cuentas[i].nombre && contrasena === cuentas[i].password) {
    alert(
      "Bienvenid@ " + cuentas[i].nombre + " tu saldo es " + cuentas[i].saldo
    );
  } else {
    alert("No encuentro tu saldo");
  }
}
getEntry = () => {
  var amount = document.getElementById("input-display");
  amount = parseInt(amount.value);
  console.log(amount);
  for (let i = 0; i < cuentas.length; i++) {
    for (let i = 0; i < cuentas.length; i++)
      var cliente = document.getElementById("fname");
    cliente = cliente.value;
    var contrasena = document.getElementById("contrasena");
    contrasena = contrasena.value;
    if (cliente === "Mali") {
      i = 0;
    } else if (cliente === "Gera") {
      i = 1;
    } else if (cliente === "Maui") {
      i = 2;
    } else {
      console.log("No funciona");
    }
    console.log(i);
    console.log(i);
    const cuentaActual = cuentas[i];
    console.log(cuentaActual);
    var saldoAnterior = cuentas[i].saldo;
    var nuevoSaldo = saldoAnterior + amount;
    console.log(nuevoSaldo);
    if (nuevoSaldo >= 990) {
      alert("Superaste el limite superior de nuestra BancaDEVF");
    } else {
      alert("Tu nuevo saldo es " + nuevoSaldo);
    }

    return;
  }
};

getWithdraw = () => {
  var amount = document.getElementById("input-display2");
  amount = parseInt(amount.value);
  console.log(amount);
  for (let i = 0; i < cuentas.length; i++) {
    for (let i = 0; i < cuentas.length; i++)
      var cliente = document.getElementById("fname");
    cliente = cliente.value;
    var contrasena = document.getElementById("contrasena");
    contrasena = contrasena.value;
    if (cliente === "Mali") {
      i = 0;
    } else if (cliente === "Gera") {
      i = 1;
    } else if (cliente === "Maui") {
      i = 2;
    } else {
      console.log("No funciona");
    }
    console.log(i);
    console.log(i);
    const cuentaActual = cuentas[i];
    console.log(cuentaActual);
    var saldoAnterior = cuentas[i].saldo;
    console.log(saldoAnterior);
    var nuevoSaldoResta = saldoAnterior - amount;
    console.log(nuevoSaldoResta);
    if (nuevoSaldoResta <= 10) {
      alert("No puedes tener menos de 10 USD en tu cuenta en BANCADEVF");
    } else {
      alert("Tu nuevo saldo es " + nuevoSaldoResta);
    }
    return;
  }
};

function printInput() {
  document.getElementById("entry").innerHTML = "Ingresar Monto";
  var inputHidden = document.getElementById("input-entry");
  inputHidden.id = "input-display";
  inputHidden.type = "number";
}
function printInput2() {
  document.getElementById("withdraw").innerHTML = "Retirar Monto";
  var inputHidden = document.getElementById("input-withdraw");
  inputHidden.id = "input-display2";
  inputHidden.type = "number";
}
function printInput3() {
  document.getElementById("btn-create-account").innerHTML = "Crear Cuenta";
  var inputHidden = document.getElementById("account-name");
  inputHidden.id = "input-display3";
  inputHidden.type = "text";
  var inputHidden1 = document.getElementById("account-password");
  inputHidden1.id = "input-display4";
  inputHidden1.type = "text";
  var inputHidden2 = document.getElementById("account-balance");
  inputHidden2.id = "input-display5";
  inputHidden2.type = "number";
}

// function getEntry() {
//   var entry = prompt("Cuanto deseas ingresar?");
//   for (let i = 0; i < cuentas.length; i++) {
//     const saldo = cuentas[i].saldo;
//     nuevoSaldo = parseInt(entry) + parseInt(saldo);
//     if (nuevoSaldo >= 990) {
//       console.log(nuevoSaldo);
//       alert("Superaste el limite superior");
//     }
//   }
// }

function refreshPage() {
  location.reload(true);
}
