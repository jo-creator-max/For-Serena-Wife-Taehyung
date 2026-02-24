/* ===== PESAN UCAPAN ===== */
let messages = [
  "Semangat jalanin hidup yg kadang² kaya tai ini",
  "Lu hebat bisa bertahan ampe sejauh ini",
  "Ga semua hal harus lu pendem ye, keluarin aja unek² lu",
  "Kalo capek janlup istirahat yg cukup, bukan yang panjang",
  "Thanks udh mau nerima gua sebagai teman virtual lu",
  "Maafin klo ada kelakuan gua yg buat lu sakit hati ye"
];

let index = 0;

function changeMessage() {
  document.getElementById("message").innerText = messages[index];
  index++;
  if (index >= messages.length) index = 0;
}

/* ===== BINTANG JATUH ===== */
function createStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");
  star.style.top = Math.random() * window.innerHeight + "%";
  star.style.left = Math.random() * window.innerWidth + "%";
  document.querySelector(".stars").appendChild(star);
  setTimeout(() => star.remove(), 1200);
}

setInterval(createStar, 800);

// ===== BINTANG KELAP-KELIP =====
function createTwinkleStars(numStars) {
  const starsContainer = document.querySelector(".stars");
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() * 3 + 1) + "s"; // variasi kecepatan kelap-kelip
    starsContainer.appendChild(star);
  }
}

// buat 40 bintang kecil
createTwinkleStars(40);

/* ===== MUSIK AMBIENT ===== */
const music = document.getElementById("bg-music"); //kalau belum ada file, tidak error

document.addEventListener("click", () => {
  if (music) {
   if (music.paused) {
    music.volume = 0.5;
    music.play();
   }
  }
});
