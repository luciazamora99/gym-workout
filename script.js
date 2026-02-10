document.addEventListener("DOMContentLoaded", () => {

  const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const hoy = new Date().getDay();

  const filas = document.querySelectorAll("tbody tr");
  filas.forEach(fila => {
    if (fila.firstElementChild.textContent.toLowerCase() === dias[hoy]) {
      fila.style.backgroundColor = "#635b5c62";
      fila.classList.add("hoy");
    }
  });

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");

  const buttonsRutina = document.querySelectorAll(".ver-rutina");

  const rutinas = {
    Lunes: {
      title: "Rutina del Lunes",
      info: [
        "1. Hip thrust",
        "2. Sentadilla búlgara",
        "3. Femoral sentado",
        "4. Patada en polea",
        "5. Patadas de glúteo",
        "6. Abducción de cadera"
      ]
    },
    Martes: {
      title: "Rutina del Martes",
      info: [
        "1. Dominadas asistidas",
        "2. Pull-down / Jalón al pecho",
        "3. Cuerdas ondulatorias",
        "4. Chest pass",
        "5. Lanzamiento lateral de pelota",
        "6. Press de pecho 3×10–12",
        "7. SkiErg 10–15 min"
      ]
    },
    Miércoles: {
      title: "Rutina del Miércoles",
      info: [
        "1. Prensa de piernas 4x12",
        "2. Extensión de cuádriceps 3x15",
        "3. Sentadilla búlgara 3x12",
        "4. Elevación de talones 4x15",
        "5. Curl femoral 3x15",
        "6. Abducciones 3x15"
      ]
    },
    Jueves: {
      title: "Rutina del Jueves",
      info: [
        "1. Calentamiento 5 min",
        "2. Circuito HIIT funcional",
        "3. Fuerza",
        "4. Core",
        "5. Enfriamiento"
      ]
    },
    Viernes: {
      title: "Rutina del Viernes",
      info: [
        "Día opcional"
      ]
    }
  };

  buttonsRutina.forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.getAttribute("data-day");
      const rutina = rutinas[day];

      modalTitle.textContent = rutina.title;
      modalBody.innerHTML = "";

      rutina.info.forEach(line => {
        const p = document.createElement("p");
        p.textContent = line;
        p.classList.add("exercise");
        modalBody.appendChild(p);
      });

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
