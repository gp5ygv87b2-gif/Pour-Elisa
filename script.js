const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const question = document.getElementById("question");
const loveScreen = document.getElementById("loveScreen");
const finalScreen = document.getElementById("finalScreen");

const openLetter = document.getElementById("openLetter");

const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const yes = document.getElementById("yes");

const message = document.getElementById("message");

const texts = [
    "(Mos provo me thonë jo 😏)",
    "Qyqy ec more 😂",
    "Jaaa ja kajte nanen 😭",
    "Mos ja tepro qitash 😭😅",
    "Eee qitash ski qare 😂"
];

let count = 0;

setTimeout(() => {
    intro.classList.add("hidden");
    envelope.classList.remove("hidden");
}, 2500);

openLetter.addEventListener("click", () => {

    envelope.classList.add("hidden");
    question.classList.remove("hidden");

});

function noClicked() {

    count++;

    if (count < texts.length) {
        message.innerText = texts[count];
    }

    if (count >= 4) {

        no1.style.display = "none";
        no2.style.display = "none";

        yes.style.display = "inline-block";
            }

}

no1.addEventListener("click", noClicked);
no2.addEventListener("click", noClicked);

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

    }, 9000);

});

function createHearts() {

    const container = document.getElementById("hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }, 250);

}
