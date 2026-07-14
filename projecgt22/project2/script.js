const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const image = document.getElementById("mainImage");
const card = document.getElementById("card");
const heartsContainer = document.getElementById("hearts-container");

/* YES clicked on initial question */
function yesClicked() {
  image.src = "200w.gif";
  question.innerText = "I am sorry baby";
  buttons.innerHTML = `
    <button onclick="stillMad()">No, I am still mad</button>
    <button onclick="okFine()">Ok fine</button>
  `;
}

/* NO, I AM STILL MAD */
function stillMad() {
  card.classList.add("large");
  card.classList.add("shake");

  image.src = "images.jpeg" ;

  question.innerHTML = `
    I know I hurt you, I see it now,<br>
    My silence failed, I broke a vow.<br>
    But love like ours does not fade away,<br>
    I’m here, I’m sorry, I choose you always anyway.
  `;

  buttons.innerHTML = `
    <img 
      src=""
      style="margin-top:15px;border-radius:12px;"
    />
    <p style="margin-top:15px;">Do you forgive me now?</p>
    <button onclick="forgiveYes()">Yes</button>
    <button onclick="forgiveNo()">No</button>
  `;

  setTimeout(() => card.classList.remove("shake"), 400);
}

/* OK FINE */
function okFine() {
  image.src = "https://via.placeholder.com/300x200?text=Love+💖";
  question.innerText = "Thank you my love 💕";
  buttons.innerHTML = "";
}

/* NO clicked on initial question */
function noClicked() {
  card.classList.add("large");

  image.src = "https://via.placeholder.com/300x200?text=My+Heart";

  question.innerHTML = `
    I never meant to cause you pain,<br>
    If words fell wrong, I’ll try again.<br>
    Every smile starts with me and you,<br>
    My heart is yours — forever true.
  `;

  buttons.innerHTML = `
    <img 
      src="https://via.placeholder.com/250x150?text=Us+Again"
      style="margin-top:15px;border-radius:12px;"
    />
    <p style="margin-top:15px;">Do you forgive me now?</p>
    <button onclick="forgiveYes()">Yes</button>
    <button onclick="forgiveNo()">No</button>
  `;
}

/* FORGIVEN */
function forgiveYes() {
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
}

/* STILL NO */
function forgiveNo() {
  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 400);
}

/* Create floating hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
