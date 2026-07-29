const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const question = document.getElementById("question");

const openLetter = document.getElementById("openLetter");

const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const yes = document.getElementById("yes");

let count = 0;

setTimeout(() => {

    intro.classList.add("hidden");
    envelope.classList.remove("hidden");

},3000);

openLetter.addEventListener("click",()=>{

    envelope.classList.add("hidden");
    question.classList.remove("hidden");

});

const phrases = [

"Qyqy ec more 😂",

"Jaaa ja kajte nanen 😭",

"Mos ja tepro qitash 😭😅",

"Eee qitash ski qare 😂"
];
function changeNo(){

    if(count < 4){

        no1.innerText = phrases[count];
        no2.innerText = phrases[count];

        count++;

        if(count === 4){

            no1.style.display = "none";
            no2.style.display = "none";

            yes.innerText = "❤️ IK NESE MUNESH QITASH ❤️";
            yes.style.fontSize = "24px";
            yes.style.padding = "20px 40px";

        }

    }

}

} no1.addEventListener("click", () => {
    changeNo();
});

no2.addEventListener("click", () => {

    changeNo();

});

yes.addEventListener("click", () => {

    question.classList.add("hidden");

    document.getElementById("loveScreen").classList.remove("hidden");

});

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let y = -30;

    const fall = setInterval(() => {
        y += 5;
        heart.style.top = y + "px";

        if (y > window.innerHeight) {
            clearInterval(fall);
            heart.remove();
        }
    }, 30);
}

setInterval(createHeart, 300);
setTimeout(() => {

    document.getElementById("loveScreen").classList.add("hidden");

    document.getElementById("finalScreen").classList.remove("hidden"); showFinalTexts();

}, 8000);
const finalTexts = document.querySelectorAll(".finalText");

function showFinalTexts() {
    finalTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add("show");
        }, index * 2500);
    });
}
