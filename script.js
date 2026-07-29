alert("Le script fonctionne");
const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const question = document.getElementById("question");
const loveScreen = document.getElementById("loveScreen");
const finalScreen = document.getElementById("finalScreen");
const dateFinal = document.getElementById("dateFinal");

const openLetter = document.getElementById("openLetter");

const yes = document.getElementById("yes");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");

const message = document.getElementById("message");

const phrases = [
    "(Mos provo me thonë jo 😏)",
    "Qyqy ec more 😂",
    "Jaaa ja kajte nanen 😭",
    "Mos ja tepro qitash 😭😅",
    "Eee qitash ski qare 😂"
];

let clicks = 0;

setTimeout(() => {
    intro.classList.add("hidden");
    envelope.classList.remove("hidden");
}, 2500);

openLetter.addEventListener("click", () => {
    envelope.classList.add("hidden");
    question.classList.remove("hidden");
});

function noClick() {

    clicks++;

    if (clicks < phrases.length) {
        message.textContent = phrases[clicks];
    }

    if (clicks >= 4) {
        no1.style.display = "none";
        no2.style.display = "none";
        yes.style.display = "inline-block";
    }

}

no1.addEventListener("click", noClick);
no2.addEventListener("click", noClick);
yes.addEventListener("click", () => {

    question.classList.add("hidden");
    loveScreen.classList.remove("hidden");

    createHearts();

    setTimeout(() => {

        loveScreen.classList.add("hidden");
        finalScreen.classList.remove("hidden");

        const texts = document.querySelectorAll(".finalText");

        texts.forEach((text, index) => {

            setTimeout(() => {

                text.classList.add("show");

            }, index * 1800);

        });

        setTimeout(() => {

            finalScreen.classList.add("hidden");

            if (dateFinal) {
                dateFinal.classList.remove("hidden");
            }

        }, texts.length * 1800 + 3000);

    }, 9000);

});

function createHearts() {

    const hearts = document.getElementById("hearts");

    if (!hearts) return;

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 250);

}
const confirmDate = document.getElementById("confirmDate");
const dateInput = document.getElementById("dateInput");

if (confirmDate) {

    confirmDate.addEventListener("click", () => {

        if (dateInput.value === "") {
            alert("Choisis une date ❤️");
            return;
        }

        const date = new Date(dateInput.value);

        const jour = date.getDate().toString().padStart(2, "0");
        const mois = (date.getMonth() + 1).toString().padStart(2, "0");
        const annee = date.getFullYear();

        alert(`J'ai trop hâte de notre date le ${jour}/${mois}/${annee} ❤️🥹`);

    });

}
