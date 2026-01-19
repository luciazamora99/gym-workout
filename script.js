const exercises = {
  "dead-bug": "Dead bug – estabilidad lumbar",
  "bird-dog": "Bird dog – control de columna",
  "side-plank": "Plancha lateral – oblicuos",
  "hip-thrust": "Hip thrust – glúteos",
  "glute-bridge": "Puente de glúteos",
  "step-back": "Zancada hacia atrás",
  "marching": "Marcha activa",
  "battle-ropes": "Battle ropes suaves",
  "elliptical": "Elíptico"
};

let saved = JSON.parse(localStorage.getItem("ejerciciosEscoliosis")) || [];

const savedList = document.getElementById("savedExercises");

function guardar() {
  localStorage.setItem("ejerciciosEscoliosis", JSON.stringify(saved));
}

function renderSaved() {
  savedList.innerHTML = "";
  saved.forEach(key => {
    const li = document.createElement("li");
    li.textContent = exercises[key];
    li.classList.add("saved");
    savedList.appendChild(li);
  });
}

document.querySelectorAll("li[data-exercise]").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.exercise;
    if (!saved.includes(key)) {
      saved.push(key);
      guardar();
      renderSaved();
    }
  });
});

renderSaved();
