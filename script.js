document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("2025-02-19").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.getElementById("countdown").innerHTML = "Registration Open!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
});

// Animated Molecule Background
const canvas = document.getElementById("moleculeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let molecules = [];
const moleculeCount = 50;

// Molecule Object
class Molecule {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 4 + 2;
    this.dx = (Math.random() - 0.5) * 1.5;
    this.dy = (Math.random() - 0.5) * 1.5;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x <= 0 || this.x >= canvas.width) this.dx *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.dy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffcc";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#00ffcc";
    ctx.fill();
  }
}

// Initialize Molecules
function initMolecules() {
  for (let i = 0; i < moleculeCount; i++) {
    molecules.push(new Molecule());
  }
}

// Animate Molecules
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  molecules.forEach((molecule) => {
    molecule.move();
    molecule.draw();
  });

  requestAnimationFrame(animate);
}

// Resize Canvas on Window Resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start Animation
initMolecules();
animate();
