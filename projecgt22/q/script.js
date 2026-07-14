const goodBtn = document.getElementById("goodBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("text");
const gift = document.getElementById("gift");
const img = document.getElementById("sceneImg");

// Images for each scene
const images = {
    morning: "giphy (2).gif",
    question: "giphy.gif",
    final: "giphy (1).gif"
};

goodBtn.onclick = () => {
    // Background fade
    document.body.classList.add("pink");

    // Change image
    changeImage(images.question);

    // Update text
    text.innerHTML = "Would you watch the movie with me,<br>moon pie? 🌙🍰";

    goodBtn.classList.add("hidden");
    yesBtn.classList.remove("hidden");

    // Hearts
    for (let i = 0; i < 15; i++) createHeart();
};

yesBtn.onclick = () => {
    document.body.classList.add("final");

    changeImage(images.final);

    text.innerHTML = "Yay! It’s a movie date 💖🍿";

    yesBtn.classList.add("hidden");
    gift.classList.remove("hidden");
};

// Fade image effect
function changeImage(src) {
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = src;
        img.style.opacity = 1;
    }, 600);
}

// Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "70%";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}
