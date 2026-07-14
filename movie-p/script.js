/* Floating hearts */
for (let i = 0; i < 30; i++) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 6 + Math.random() * 6 + 's';
  heart.style.fontSize = 16 + Math.random() * 24 + 'px';
  document.body.appendChild(heart);
}

/* NO button moves ONLY after click */
const noBtn = document.getElementById('noBtn');
const tryAgain = document.getElementById('tryAgain');
let isRunning = false;
let speed = 1;

noBtn.addEventListener('click', () => {
  if (isRunning) return;

  isRunning = true;
  tryAgain.style.display = 'block';
  noBtn.style.position = 'fixed';

  function move() {
    noBtn.style.left = Math.random() * 85 + 'vw';
    noBtn.style.top = Math.random() * 85 + 'vh';
    speed += 0.0003;
    setTimeout(move, Math.max(80, 1000 / speed));
  }
  move();
});

/* YES button flow */
const yesBtn = document.getElementById('yesBtn');
const main = document.getElementById('main');
const letter = document.getElementById('letter');

yesBtn.addEventListener('click', () => {
  startConfetti();
  main.style.opacity = '0';

  setTimeout(() => {
    main.style.display = 'none';
    letter.classList.add('unfold');
  }, 1000);
});

/* Letter interaction */
const typewriter = document.getElementById('typewriter');
const paragraphs = document.querySelectorAll('.paragraph');
const photo = document.querySelector('.photo');

letter.addEventListener('click', () => {
  playMusic();
  typeText("To: My dearest Nadin ❤️", 100);

  paragraphs.forEach((p, i) => {
    setTimeout(() => p.classList.add('show'), 1200 + i * 500);
  });

  setTimeout(() => photo.classList.add('show'), 3500);
}, { once: true });

function typeText(text, speed) {
  let i = 0;
  const interval = setInterval(() => {
    typewriter.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

/* Confetti */
function startConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const particles = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 18 + Math.random() * 14,
    speed: 2 + Math.random() * 3,
    emoji: ['💖','💕','❤️','💘'][Math.floor(Math.random() * 4)]
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.font = p.size + 'px serif';
      ctx.fillText(p.emoji, p.x, p.y);
      p.y += p.speed;
      if (p.y > canvas.height) p.y = -20;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* Music */
function playMusic() {
  const audio = new Audio('Her.mp3');
  audio.loop = true;
  audio.volume = 0.5;
  audio.play();
}
