const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const question = document.getElementById("question");
const loveScreen = document.getElementById("loveScreen");
const finalScreen = document.getElementById("finalScreen");

const openLetter = document.getElementById("openLetter");

const yes = document.getElementById("yes");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");

const message = document.getElementById("message");
const finalTexts = document.querySelectorAll(".finalText");
const hearts = document.getElementById("hearts");

let noClicks = 0;

const messages = [
    "T'es sûre ? 🥺",
    "Réfléchis encore ❤️",
    "Allez stp 😭",
    "Tu peux pas dire non 😭❤️",
    "Bon... j'abandonne... ou pas 😏",
    "Le bouton ❤️ Po ❤️ arrive..."
];

// Intro → Enveloppe
setTimeout(() => {
    intro.classList.add("hidden");
    envelope.classList.remove("hidden");
}, 2500);

// Enveloppe → Question
openLetter.addEventListener("click", () => {
    envelope.classList.add("hidden");
    question.classList.remove("hidden");
});

// Boutons "Jo"
function handleNo() {

    noClicks++;

    if (noClicks <= messages.length) {
        message.textContent = messages[noClicks - 1];
    }

    no1.style.position = "absolute";
    no2.style.position = "absolute";

    no1.style.left = Math.random() * 75 + "%";
    no1.style.top = Math.random() * 70 + "%";

    no2.style.left = Math.random() * 75 + "%";
    no2.style.top = Math.random() * 70 + "%";

    if (noClicks >= 6) {
        yes.style.display = "inline-block";
    }

}

no1.addEventListener("click", handleNo);
no2.addEventListener("click", handleNo);
// Pluie de cœurs
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animation = "fall 5s linear forwards";
    heart.style.pointerEvents = "none";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}

// Bouton "Po"
yes.addEventListener("click", () => {

    question.classList.add("hidden");
    loveScreen.classList.remove("hidden");

    const rain = setInterval(createHeart, 250);

    setTimeout(() => {

        clearInterval(rain);

        loveScreen.classList.add("hidden");
        finalScreen.classList.remove("hidden");

        finalTexts.forEach((text, index) => {

            setTimeout(() => {
                text.style.display = "block";
            }, index * 2500);

        });

    }, 7000);

});