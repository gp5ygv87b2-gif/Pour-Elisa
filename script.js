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

function noClick(){

    clicks++;

    if(clicks < phrases.length){
        message.textContent = phrases[clicks];
    }

    if(clicks >= 4){

        no1.style.display = "none";
        no2.style.display = "none";

        yes.style.display = "inline-block";
    }

}
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

function noClick(){

    clicks++;

    if(clicks < phrases.length){
        message.textContent = phrases[clicks];
    }

    if(clicks >= 4){

        no1.style.display = "none";
        no2.style.display = "none";

        yes.style.display = "inline-block";
    }

}