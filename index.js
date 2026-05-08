let current = 0;
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
let timer    = setInterval(() => changeSlide(1), 5000); // Auto-advance every 5s

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active');
  dots[current].classList.add('active');

  // Reset auto-advance timer when user clicks
  clearInterval(timer);
  timer = setInterval(() => changeSlide(1), 5000);
}

function changeSlide(direction) {
  const next = (current + direction + slides.length) % slides.length;
  goToSlide(next);
}


var navLinks = document.getElementById("navLinks");

function showMenu(){
  navLinks.style.right = "0";
}

function hideMenu(){
  navLinks.style.right = "-500px";
}

//Root Section//
const VISIBLE = 4;
let idx = 0;
const reel = document.getElementById('reel');
const prevBtn = document.getElementById('prev2');
const nextBtn = document.getElementById('next2');
const total = reel.children.length;
let times; // store the interval so we can clear it

function update() {
  const cardW = reel.children[0].offsetWidth;
  reel.style.transform = `translateX(-${idx * (cardW + 12)}px)`;
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx >= total - VISIBLE;
}

function startAuto() {
  times = setInterval(() => {
    if (idx < total - VISIBLE) { idx++; } else { idx = 0; }
    update();
  }, 3500);
}

function resetAuto() {
  clearInterval(times); // stop the current timer
  startAuto();          // start a fresh one
}

nextBtn.onclick = () => {
  if (idx < total - VISIBLE) { idx++; update(); }
  resetAuto();
};

prevBtn.onclick = () => {
  if (idx > 0) { idx--; update(); }
  resetAuto();
};

window.addEventListener('resize', update);
update();
startAuto();
