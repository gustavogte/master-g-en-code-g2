var cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

var cliente = prompt("Cual es tu nombre en nuestro Banco DevF");
if (cliente === "Mali") {
  alert("Hola " + cuentas[0].nombre);
  var contrasena = prompt("Cual es tu contrasena");
  if (contrasena === "helloworld") {
    alert(
      "Bienvenido " + cuentas[0].nombre + "tu saldo es de " + cuentas[0].saldo
    );

    var operacion = prompt(
      "Quieres Consultar saldo, Ingresar monto, o Retirar monto"
    );
    if (operacion === "Consultar saldo") {
      alert("Tu saldo es " + cuentas[0].saldo);
    } else if (operacion === "Ingresar monto") {
      var ingreso = prompt("Que cantidad deseas ingresar");
      var nuevoSaldo = parseInt(cuentas[0].saldo) + parseInt(ingreso);
      if (nuevoSaldo < 990 && nuevoSaldo > 10) {
        alert("Tu nuevo saldo es de " + nuevoSaldo);
      } else {
        alert("No es posible");
      }
    } else if (operacion === "Retirar monto") {
      var retiro = prompt("Que cantidad deseas retirar");
      var nuevoSaldo = parseInt(cuentas[0].saldo) - parseInt(retiro);
      if (nuevoSaldo < 990 && nuevoSaldo > 10) {
        alert("Tu nuevo saldo es de " + nuevoSaldo);
      } else {
        alert("No es posible");
      }
    }
  } else if (contrasena != "helloworld") {
    var contrasena = prompt(
      "tu contrasena no es correcta, puedes volver a intentarlo."
    );
    if (contrasena === "123") {
      alert(
        "Bienvenido " + cuentas[0].nombre + "tu saldo es de " + cuentas[0].saldo
      );

      var operacion = prompt(
        "Quieres Consultar saldo, Ingresar monto, o Retirar monto"
      );
      if (operacion === "Consultar saldo") {
        alert("Tu saldo es " + cuentas[0].saldo);
      } else if (operacion === "Ingresar monto") {
        var ingreso = prompt("Que cantidad deseas ingresar");
        var nuevoSaldo = parseInt(cuentas[0].saldo) + parseInt(ingreso);
        if (nuevoSaldo < 990 && nuevoSaldo > 10) {
          alert("Tu nuevo saldo es de " + nuevoSaldo);
        } else {
          alert("No es posible");
        }
      } else if (operacion === "Retirar monto") {
        var retiro = prompt("Que cantidad deseas retirar");
        var nuevoSaldo = parseInt(cuentas[0].saldo) - parseInt(retiro);
        if (nuevoSaldo < 990 && nuevoSaldo > 10) {
          alert("Tu nuevo saldo es de " + nuevoSaldo);
        } else {
          alert("No es posible");
        }
      }
    }
  } else {
    alert("Tu contrasena esta mal");
  }
} else if (cliente === "Gera") {
  alert("Hola " + cuentas[1].nombre);
  var contrasena = prompt("Cual es tu contrasena");
  if (contrasena === "l33t") {
    alert(
      "Bienvenid@ " + cuentas[1].nombre + " tu saldo es de " + cuentas[1].saldo
    );

    var operacion = prompt(
      "Quieres Consultar saldo, Ingresar monto, o Retirar monto"
    );
    if (operacion === "Consultar saldo") {
      alert("Tu saldo es " + cuentas[1].saldo);
    } else if (operacion === "Ingresar monto") {
      var ingreso = prompt("Que cantidad deseas ingresar");
      var nuevoSaldo = parseInt(cuentas[1].saldo) + parseInt(ingreso);
      if (nuevoSaldo < 990 && nuevoSaldo > 10) {
        alert("Tu nuevo saldo es de " + nuevoSaldo);
      } else {
        alert("No es posible");
      }
    } else if (operacion === "Retirar monto") {
      var retiro = prompt("Que cantidad deseas retirar");
      var nuevoSaldo = parseInt(cuentas[1].saldo) - parseInt(retiro);
      if (nuevoSaldo < 990 && nuevoSaldo > 10) {
        alert("Tu nuevo saldo es de " + nuevoSaldo);
      } else {
        alert("No es posible");
      }
    }
  } else if (contrasena != "123") {
    var contrasena = prompt(
      "tu contrasena no es correcta, puedes volver a intentarlo."
    );
    if (contrasena === "l33t") {
      alert(
        "Bienvenido " + cuentas[1].nombre + "tu saldo es de " + cuentas[1].saldo
      );

      var operacion = prompt(
        "Quieres Consultar saldo, Ingresar monto, o Retirar monto"
      );
      if (operacion === "Consultar saldo") {
        alert("Tu saldo es " + cuentas[2].saldo);
      } else if (operacion === "Ingresar monto") {
        var ingreso = prompt("Que cantidad deseas ingresar");
        var nuevoSaldo = parseInt(cuentas[1].saldo) + parseInt(ingreso);
        if (nuevoSaldo < 990 && nuevoSaldo > 10) {
          alert("Tu nuevo saldo es de " + nuevoSaldo);
        } else {
          alert("No es posible");
        }
      } else if (operacion === "Retirar monto") {
        var retiro = prompt("Que cantidad deseas retirar");
        var nuevoSaldo = parseInt(cuentas[1].saldo) - parseInt(retiro);
        if (nuevoSaldo < 990 && nuevoSaldo > 10) {
          alert("Tu nuevo saldo es de " + nuevoSaldo);
        } else {
          alert("No es posible");
        }
      }
    }
  } else {
    alert("Tu contrasena esta mal");
  }
} else if (cliente === "Maui") {
  alert("Hola " + cuentas[2].nombre);
  var contrasena = prompt("Cual es tu contrasena");
  if (contrasena === "123") {
    alert(
      "Bienvenido " + cuentas[2].nombre + "tu saldo es de " + cuentas[2].saldo
    );

    var operacion = prompt(
      "Quieres Consultar saldo, Ingresar monto, o Retirar monto"
    );
    if (operacion === "Consultar saldo") {
      alert("Tu saldo es " + cuentas[2].saldo);
    } else if (operacion === "Ingresar monto") {
      var ingreso = prompt("Que cantidad deseas ingresar");
      var nuevoSaldo = parseInt(cuentas[2].saldo) + parseInt(ingreso);
      if (nuevoSaldo < 990 && nuevoSaldo > 10) {
        alert("Tu nuevo saldo es de " + nuevoSaldo);
      } else {
        alert("No es posible");
      }
    } else if (operacion === "Retirar monto") {
      var retiro = prompt("Que cantidad deseas retirar");
      var nuevoSaldo = parseInt(cuentas[2].saldo) - parseInt(retiro);
      if (nuevoSaldo < 990 && nuevoSaldo > 10) {
        alert("Tu nuevo saldo es de " + nuevoSaldo);
      } else {
        alert("No es posible");
      }
    }
  } else if (contrasena != "123") {
    var contrasena = prompt(
      "tu contrasena no es correcta, puedes volver a intentarlo."
    );
    if (contrasena === "123") {
      alert(
        "Bienvenido " + cuentas[2].nombre + "tu saldo es de " + cuentas[2].saldo
      );

      var operacion = prompt(
        "Quieres Consultar saldo, Ingresar monto, o Retirar monto"
      );
      if (operacion === "Consultar saldo") {
        alert("Tu saldo es " + cuentas[2].saldo);
      } else if (operacion === "Ingresar monto") {
        var ingreso = prompt("Que cantidad deseas ingresar");
        var nuevoSaldo = parseInt(cuentas[2].saldo) + parseInt(ingreso);
        if (nuevoSaldo < 990 && nuevoSaldo > 10) {
          alert("Tu nuevo saldo es de " + nuevoSaldo);
        } else {
          alert("No es posible");
        }
      } else if (operacion === "Retirar monto") {
        var retiro = prompt("Que cantidad deseas retirar");
        var nuevoSaldo = parseInt(cuentas[2].saldo) - parseInt(retiro);
        if (nuevoSaldo < 990 && nuevoSaldo > 10) {
          alert("Tu nuevo saldo es de " + nuevoSaldo);
        } else {
          alert("No es posible");
        }
      }
    }
  } else {
    alert("Tu contrasena esta mal");
  }
} else {
  alert("No tienes cuenta en DevF");
}
