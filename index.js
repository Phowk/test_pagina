document.addEventListener("DOMContentLoaded", () => {
    const botonVerMas = document.getElementById("botonvermas");
    const contenedorAbajo = document.getElementById("contenedor2");

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
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const cerrarBtn = document.getElementById("cerrarModal");

  // Para mostrar el modal desde otro botón (ejemplo)
  const mostrarVida = document.getElementById("vida");
  if (mostrarVida) {
    mostrarVida.addEventListener("click", () => {
        modal.style.display = "flex";
        modal.style.animation = "fadeIn 0.5s";
        modal.style.animationFillMode = "forwards";
        document.getElementById("titulo").textContent = "Su vida";

    });
  }
  const mostrarObra = document.getElementById("obra");
  if (mostrarObra) {
    mostrarObra.addEventListener("click", () => {
        modal.style.display = "flex";
        modal.style.animation = "fadeIn 0.5s";
        modal.style.animationFillMode = "forwards";
        document.getElementById("titulo").textContent = "Su Obra";

    });
  }

  const mostrarSu = document.getElementById("su");
  if (mostrarSu) {
    mostrarSu.addEventListener("click", () => {
        modal.style.display = "flex";
        modal.style.animation = "fadeIn 0.5s";
        modal.style.animationFillMode = "forwards";
        document.getElementById("titulo").textContent = "Su...";

    });
  }

  // Cerrar el modal
  cerrarBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.style.animation = "fadeOut 0.5s";
    modal.style.animationFillMode = "forwards";
  });

  // Opcional: cerrar haciendo clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
        modal.style.animation = "fadeOut 0.5s";
    }
  });
});
