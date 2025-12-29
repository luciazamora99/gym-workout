const exercises = {
  "dominadas-asistidas": {
    title: "Dominadas asistidas",
    gif: "https://www.calistenia.net/wp-content/uploads/2015/10/Dominadas-Neutras.gif",
    info: "3 series × 4 repeticiones"
  },

   "hip-thrust": {
    title: "Hip Thrust",
    gif: "https://barbend.com/wp-content/uploads/2022/02/hip-thrust-barbend-movement-gif-masters.gif",
    info: "4 series × 8–10 repeticiones"
  },

   "pulldown": {
    title: "Pull-down / Jalón al pecho",
    gif: "https://barbend.com/wp-content/uploads/2023/03/straight-arm-pulldown-barbend-movement-gif-masters.gif",
    info: "3 series × 12 repeticiones"
  },

   "remo-maquina": {
    title: "Remo en máquina",
    gif: "URL_DEL_GIF",
    info: "3 series × 12 repeticiones"
  },

    "press-militar": {
    title: "Press militar con mancuernas",
    gif: "https://i.makeagif.com/media/7-03-2018/yM_aiF.gif",
    info: "3 series × 10 repeticiones"
  },
  "elevaciones-laterales": {
    title: "Elevaciones laterales",
    gif: "https://static.wixstatic.com/media/c94d75_86585c1261ef4d0aaa235280b21a560d~mv2.gif",
    info: "3 series × 12 repeticiones"
  },
  "leg-press": {
    title: "Leg Press",
    gif: "https://fitnessprogramer.com/wp-content/uploads/2021/08/Lever-Horizontal-Leg-Press.gif",
    info: "3 series × 10 repeticiones"
  },
  "goblet-squat": {
    title: "Goblet squat",
    gif: "https://barbend.com/wp-content/uploads/2022/06/goblet-squat-barbend-movement-gif-masters.gif",
    info: "3 series × 10 repeticiones"
  },
  "dead-bug": {
    title: "Dead bug / Bird dog",
    gif: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/02/NarrowVibrantHawk-size_restricted.gif",
    info: "3 series × 10 repeticiones"
  },
  "estiramientos": {
    title: "Estiramientos",
    gif: "https://i.pinimg.com/1200x/6c/2c/8e/6c2c8eb4578204c064f9afc807f54c66.jpg",
    info: "10 minutos"
  }
};

//Modal
const modal = document.getElementById("exerciseModal");
const modalTitle = document.getElementById("modalTitle");
const modalGif = document.getElementById("modalGif");
const modalInfo = document.getElementById("modalInfo");
const closeModal = document.getElementById("closeModal");


// Abrir modal
document.querySelectorAll(".day li[data-exercise]").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.exercise;
    const exercise = exercises[key];
    if (!exercise) return;

    modalTitle.textContent = exercise.title;
    modalGif.src = exercise.gif;
    modalInfo.textContent = exercise.info;
    modal.classList.add("active");
  });
});

// Cerrar con X
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});



// Cerrar tocando fondo
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// ⭐ CERRAR CON ESC ⭐
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
  }
});
