// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "-30px";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  heart.style.animation = "fall " + (4 + Math.random() * 3) + "s linear forwards";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);

// Background Music
const music = new Audio("music/happy-birthday.mp3");
music.loop = true;

function playMusic() {
  music.play();
}

// Fireworks Effect
function fireworks() {
  for (let i = 0; i < 150; i++) {
    let spark = document.createElement("div");
    spark.innerHTML = "✨";
    spark.style.position = "fixed";
    spark.style.left = Math.random() * window.innerWidth + "px";
    spark.style.top = Math.random() * window.innerHeight + "px";
    spark.style.fontSize = "20px";
    spark.style.opacity = "1";
    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 2000);
  }
}

// Gift Button Animation
function openGift() {
  fireworks();
  playMusic();

  setTimeout(() => {
    alert("🎂 Happy Birthday Sumera! ❤️\n\nMay Allah always keep you smiling.\n\nWith Love,\nAhmad ❤️");
  }, 1000);
}
