// if (confirm("¿Quieres entrar a la mejor pagina de autos?")) {
//       var nombreUsuario = document.getElementById("nombre-usuario");
//        var nombre = prompt("Introduzca su nombre:");
//        alert("¡Hola " + nombre + "!");
//       nombreUsuario.textContent = nombre;
// } else {
// // Redirigir a Google
// window.location.href = "https://www.google.com/?hl=es";
// }


if (window.location.pathname === "/index.html") {
      if (confirm("¿Quieres entrar a la mejor pagina de autos?")) {
            var nombreUsuario = document.getElementById("nombre-usuario");
             var nombre = prompt("Introduzca su nombre:");
             alert("¡Hola " + nombre + "!");
            nombreUsuario.textContent = nombre;
      } else {
      // Redirigir a Google
      window.location.href = "https://www.google.com/?hl=es";
      }
}
