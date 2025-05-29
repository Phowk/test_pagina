document.addEventListener("DOMContentLoaded", () => {
    const botonVerMas = document.getElementById("botonvermas");
    const contenedorAbajo = document.getElementById("contenedor2");
    const modal = document.getElementById("modal");
    const cerrarBtn = document.getElementById("cerrarModal");

    botonVerMas.addEventListener("click", () => {
        // Desplazar hacia el contenedor de abajo
        contenedorAbajo.scrollIntoView({ behavior: "smooth", block: "start" });

        // Agregar clase para resaltar
        contenedorAbajo.classList.add("resaltar");

        // Quitar el resaltado después de 1 segundo
        setTimeout(() => {
            contenedorAbajo.classList.remove("resaltar");
        }, 700);
    });
    // Para mostrar el modal desde otro botón (ejemplo)
  const mostrarVida = document.getElementById("vida");
  // if (mostrarVida) {
  //   mostrarVida.addEventListener("click", () => {
  //       modal.style.display = "flex";
  //       modal.style.animation = "fadeIn 0.5s";
  //       modal.style.animationFillMode = "forwards";
  //       document.getElementById("titulo").textContent = "Su vida";

  //   });
  // }
  const mostrarObra = document.getElementById("obra");
  if (mostrarObra) {
    mostrarObra.addEventListener("click", () => {
        modal.style.display = "flex";
        modal.style.animation = "fadeIn 0.5s";
        modal.style.animationFillMode = "forwards";
        document.getElementById("titulo").textContent = "Su Obra";

    });
  }

  const mostrarsuperspectiva = document.getElementById("perspectiva");
  if (mostrarsuperspectiva) {
    mostrarsuperspectiva.addEventListener("click", () => {
        modal.style.display = "flex";
        modal.style.animation = "fadeIn 0.5s";
        modal.style.animationFillMode = "forwards";
        document.getElementById("titulo").textContent = "Su perspectiva política";

    });
  }



});

