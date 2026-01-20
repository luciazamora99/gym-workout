document.addEventListener("DOMContentLoaded", () => {

  // Resaltar el día actual
  const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const hoy = new Date().getDay();

  const filas = document.querySelectorAll("tbody tr");
  filas.forEach(fila => {
    if (fila.firstElementChild.textContent.toLowerCase() === dias[hoy]) {
      fila.style.backgroundColor = "#635b5c62";
      fila.classList.add("hoy");
    }
  });

  // Modal (popup)
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");

  // ---------- RUTINAS ----------
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
        "5. Abducción de cadera"
      ]
    },
    Martes: {
      title: "Rutina del Martes",
      info: [
        "1. Dominadas asistidas",
        "2. Pull-down / Jalón al pecho",
        "3. Cuerdas ondulatorias (“viborita”)",
        "4. Chest pass (lanzamiento frontal)",
        "5. Lanzamiento lateral de pelota",
        "6. Press de pecho (máquina o mancuernas) – 3×10–12",
        "7. SkiErg (máquina de esquí) - 10 a 15 min (intervalos o ritmo constante)",

        "8. Core seguro:",
        "a. Plancha frontal 3x20–30s",
        "b. Plancha lateral 3x20s",
        "c. Dead bug 3x10s cada lado"
      ]
    },
    Miércoles: {
      title: "Rutina del Miércoles",
      info: [
        "1. Prensa de piernas - 4x12",
        "2. Extensión de cuádriceps - 3x15",
        "3. Sentadilla búlgara - 3x12 por pierna",
        "4. Elevación de talones en máquina - 4x15",
        "5. Curl femoral sentado- 3x15",
        "5. Abducciones- 3x15",

        "5. Core seguro:",
        "a. Plancha frontal 3x20–30s",
        "b. Plancha lateral 3x20s",
        "c. Dead bug 3x10s cada lado",
        "6. Saltar la cuerda x5 minutos"
      ]
    },
    Jueves: {
      title: "Rutina del Jueves",
      info: [
        "1. Calentamiento 5 min (trote suave o saltos suaves)",
        "2. Circuito HIIT funcional (4 rondas):",
        "   - 30s Cuerdas ondulatorias (“viborita”)",
        "   - 30s Slam de pelota medicinal (o lanzamiento al suelo)",
        "   - 30s Sentadilla con salto (o sentadilla normal si necesitás)",
        "   - 30s Mountain climbers (suaves, sin presión abdominal)",
        "   - 30s descanso",
        "3. Fuerza (3 rondas):",
        "   - 10 Flexiones",
        "   - 10 Fondos en paralelas",
        "   - 30s Máquina de Ski (SkiErg)",
        "4. Core seguro (2 rondas):",
        "   - 30s Plancha frontal",
        "   - 30s Plancha lateral por lado",
        "   - 10 Dead bug por lado",
        "5. Enfriamiento 5 min (estiramiento y respiración)"
      ]
    },
    Viernes: {
      title: "Rutina del Viernes",
      info: [
        "Día opcional, haz lo que quieras"
      ]
    }
  };

  buttonsRutina.forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.getAttribute("data-day");
      const rutina = rutinas[day];

      modalTitle.textContent = rutina.title;

      // Limpiar contenido previo
      modalBody.innerHTML = "";

      // Agregar información sin viñetas
      rutina.info.forEach(line => {
        const p = document.createElement("p");
        p.textContent = line;
        p.classList.add("exercise");
        modalBody.appendChild(p);
      });

      modal.style.display = "flex";
    });
  });


  // ---------- RECETAS ----------
  const buttonsReceta = document.querySelectorAll(".ver-receta");

  const recetas = {
    omelette: {
      title: "Omelette de claras",
      body: `
        <h3>Ingredientes</h3>
        <ul>
          <li>4 claras</li>
          <li>1 huevo entero</li>
          <li>Espinaca</li>
          <li>Tomate</li>
          <li>Sal y pimienta</li>
        </ul>
        <h3>Preparación</h3>
        <ol>
          <li>Batir claras y huevo.</li>
          <li>Sofreír vegetales.</li>
          <li>Agregar mezcla y cocinar 3–4 min.</li>
        </ol>
      `
    },
    ensalada: {
      title: "Ensalada de pollo",
      body: `
        <h3>Ingredientes</h3>
        <ul>
          <li>Pechuga de pollo</li>
          <li>Lechuga, tomate, pepino</li>
          <li>Aceite de oliva</li>
          <li>Limón</li>
        </ul>
        <h3>Preparación</h3>
        <ol>
          <li>Cocinar pollo y cortar en tiras.</li>
          <li>Mezclar vegetales y agregar pollo.</li>
          <li>Aliñar con limón y aceite.</li>
        </ol>
      `
    },
    quinoa: {
      title: "Bowl de quinoa",
      body: `
        <h3>Ingredientes</h3>
        <ul>
          <li>Quinoa</li>
          <li>Verduras</li>
          <li>Huevo o pollo</li>
          <li>Aderezo ligero</li>
        </ul>
        <h3>Preparación</h3>
        <ol>
          <li>Cocinar quinoa.</li>
          <li>Agregar verduras y proteína.</li>
          <li>Aliñar y servir.</li>
        </ol>
      `
    },
    snack: {
      title: "Snack de yogurt y frutas",
      body: `
        <h3>Ingredientes</h3>
        <ul>
          <li>Yogurt natural</li>
          <li>Frutas</li>
          <li>Semillas (opcional)</li>
        </ul>
        <h3>Preparación</h3>
        <ol>
          <li>Mezclar yogurt con frutas.</li>
          <li>Agregar semillas si querés.</li>
        </ol>
      `
    },
    salmon: {
      title: "Salmón al horno",
      body: `
        <h3>Ingredientes</h3>
        <ul>
          <li>Filete de salmón</li>
          <li>Limón</li>
          <li>Especias al gusto</li>
          <li>Verduras al lado</li>
        </ul>
        <h3>Preparación</h3>
        <ol>
          <li>Hornear salmón 15–20 min a 180°C.</li>
          <li>Servir con verduras.</li>
        </ol>
      `
    }
  };

  buttonsReceta.forEach(btn => {
    btn.addEventListener("click", () => {
      const recipeKey = btn.getAttribute("data-recipe");
      const receta = recetas[recipeKey];

      modalTitle.textContent = receta.title;
      modalBody.innerHTML = receta.body;

      modal.style.display = "flex";
    });
  });

  // Cerrar modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
