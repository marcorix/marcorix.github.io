// LOGO interactivity

const logo = document.querySelector(".navbar-brand");
const logosArray = [
  `< Marco<span class="secondary">Rix</span> >`,
  `["Marco", <span class="secondary">"Rix"</span>]`,
  `Marco: <span class="secondary">Rix;</span>`,
  "${ marco<span class=`secondary`>Rix </span>}",
];

let indexCounter = 0;

function getLogo(index) {
  logo.innerHTML = logosArray[index];
}

logo.addEventListener("click", () => {
  if (indexCounter === logosArray.length - 1) {
    getLogo(indexCounter);
    indexCounter = 0;
  } else {
    getLogo(indexCounter);
    indexCounter++;
  }
});

// ABOUT ME interactivity

const treehouseBtn = document.getElementById("treehouse");
const udemyBtn = document.getElementById("udemy");
const photo = document.getElementById("about-photo");
const marco = document.getElementById("marco");

treehouseBtn.addEventListener("click", () => {
  photo.innerHTML = `<img src="img/treehouse.png" class="img-fluid w-100" alt="treehouse" />`;
});

udemyBtn.addEventListener("click", () => {
  photo.innerHTML = `<img src="img/udemy.png" class="img-fluid w-100" alt="treehouse" />`;
});

marco.addEventListener("click", () => {
  photo.innerHTML = `<img src="img/me.png" class="img-fluid w-100" alt="treehouse" />`;
});
