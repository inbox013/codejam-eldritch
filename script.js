import { ancients } from "./assets/Ancients/index.js";
import { difficulties } from "./data/difficulties.js";
import { ancientsData } from "./data/ancients.js";

// задаем бэкраунд фон
const app = document.querySelector(".app");
app.style.backgroundImage = `url('./assets/home.png')`;

// создаем карточки героев
const ancientscard = document.querySelector(".ancients-container");

for (let i = 0; i < ancients.length; i++) {
  const div = document.createElement("div");
  ancientscard.append(div);
  div.classList.add("ancient-card");
  div.style.backgroundImage = ancients[i].src;
}

// при клике на карточку героя показываем сложность
const card = document.querySelectorAll(".ancient-card");
const difficulty = document.querySelector(".difficulty-container");
let showDifficulty = false;

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", showDiff);
}
function showDiff(evt) {
  evt.preventDefault();
  card.forEach((c) => {
    c.classList.remove("active");
  });
  this.classList.add("active");
  if (showDifficulty == false) {
    difficulty.style.display = "flex";
    showDifficulty = true;
  }
}

//выбираем сложность
const diff = document.querySelectorAll(".difficulty");
const shuffleBtn = document.querySelector(".shuffle-button");
let showShuff = false;

for (let i = 0; i < diff.length; i++) {
  diff[i].addEventListener("click", showShuffle);

  function showShuffle(evt) {
    evt.preventDefault();
    diff.forEach((d) => {
      d.classList.remove("active");
    });
    this.classList.add("active");
    if (showShuff == false) {
      currentState.style.display = "none";
      desk.style.display = "none";
      lastCard.style.display = "none";
      shuffleBtn.classList.add("visible");
      showShuff = true;
    }
  }
}

//показываем стадии и колоду
const currentState = document.querySelector(".current-state");
const desk = document.querySelector(".desk");
const lastCard = document.querySelector(".last-card");

shuffleBtn.addEventListener("click", hideShuffle);

function hideShuffle(evt) {
  evt.preventDefault();
  if (showShuff == true) {
    currentState.style.display = "flex";
    desk.style.display = "flex";
    lastCard.style.display = "flex";
    shuffleBtn.classList.remove("visible");
    showShuff = false;
  }
}

// определяем какие цифры будут в кружочках
let green = document.querySelectorAll(".green");
let brown = document.querySelectorAll(".brown");
let blue = document.querySelectorAll(".blue");

card[0].addEventListener("click", azathothNumb);
card[1].addEventListener("click", cthulhuNumb);
card[2].addEventListener("click", iogSothothNumb);
card[3].addEventListener("click", shubNiggurathNumb);

function azathothNumb() {
  green[0].textContent = ancientsData[0].firstStage.greenCards;
  brown[0].textContent = ancientsData[0].firstStage.brownCards;
  blue[0].textContent = ancientsData[0].firstStage.blueCards;

  green[1].textContent = ancientsData[0].secondStage.greenCards;
  brown[1].textContent = ancientsData[0].secondStage.brownCards;
  blue[1].textContent = ancientsData[0].secondStage.blueCards;

  green[2].textContent = ancientsData[0].thirdStage.greenCards;
  brown[2].textContent = ancientsData[0].thirdStage.brownCards;
  blue[2].textContent = ancientsData[0].thirdStage.blueCards;
}

function cthulhuNumb() {
  green[0].textContent = ancientsData[1].firstStage.greenCards;
  brown[0].textContent = ancientsData[1].firstStage.brownCards;
  blue[0].textContent = ancientsData[1].firstStage.blueCards;

  green[1].textContent = ancientsData[1].secondStage.greenCards;
  brown[1].textContent = ancientsData[1].secondStage.brownCards;
  blue[1].textContent = ancientsData[1].secondStage.blueCards;

  green[2].textContent = ancientsData[1].thirdStage.greenCards;
  brown[2].textContent = ancientsData[1].thirdStage.brownCards;
  blue[2].textContent = ancientsData[1].thirdStage.blueCards;
}

function iogSothothNumb() {
  green[0].textContent = ancientsData[2].firstStage.greenCards;
  brown[0].textContent = ancientsData[2].firstStage.brownCards;
  blue[0].textContent = ancientsData[2].firstStage.blueCards;

  green[1].textContent = ancientsData[2].secondStage.greenCards;
  brown[1].textContent = ancientsData[2].secondStage.brownCards;
  blue[1].textContent = ancientsData[2].secondStage.blueCards;

  green[2].textContent = ancientsData[2].thirdStage.greenCards;
  brown[2].textContent = ancientsData[2].thirdStage.brownCards;
  blue[2].textContent = ancientsData[2].thirdStage.blueCards;
}

function shubNiggurathNumb() {
  green[0].textContent = ancientsData[3].firstStage.greenCards;
  brown[0].textContent = ancientsData[3].firstStage.brownCards;
  blue[0].textContent = ancientsData[3].firstStage.blueCards;

  green[1].textContent = ancientsData[3].secondStage.greenCards;
  brown[1].textContent = ancientsData[3].secondStage.brownCards;
  blue[1].textContent = ancientsData[3].secondStage.blueCards;

  green[2].textContent = ancientsData[3].thirdStage.greenCards;
  brown[2].textContent = ancientsData[3].thirdStage.brownCards;
  blue[2].textContent = ancientsData[3].thirdStage.blueCards;
}
