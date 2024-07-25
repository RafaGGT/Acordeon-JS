let btns = document.querySelectorAll(".acordeon-btn"); // Con esto seleccionamos todos los elementos con la clase ".acordeon-btn"
let ctn = document.querySelectorAll(".contenido"); // Con esto seleccionamos todos los elementos con la clase ".contenido"
let iconD = document.querySelectorAll(".down"); // Con esto seleccionamos todos los elementos con la clase ".down"
let iconU = document.querySelectorAll(".up"); // Con esto seleccionamos todos los elementos con la clase ".up"

//funcionalidad del boton
btns.forEach((btn, index) => {
  // Usamos ".forEach(() =>{})" para iterar sobre cada botón
  btn.addEventListener("click", () => {
    // Añadimos un evento "click" a cada botón
    btn.classList.toggle("active"); // Alternamos la clase "active" en el botón

    // Verificamos si el contenido correspondiente está visible o no
    if (ctn[index].style.display === "block") {
      // Si el contenido está visible, lo ocultamos
      ctn[index].style.display = "none";
      iconD[index].style.display = "inline"; // Mostramos el icono de "down"
      iconU[index].style.display = "none"; // Ocultamos el icono de "up"
    } else {
      // Si el contenido está oculto, lo mostramos
      ctn[index].style.display = "block";
      iconD[index].style.display = "none"; // Ocultamos el icono de "down"
      iconU[index].style.display = "inline"; // Mostramos el icono de "up"
    }
  });
});
