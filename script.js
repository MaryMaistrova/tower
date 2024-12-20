const btnsUp = Array.from(document.getElementsByClassName("up"));
const btnsDown = Array.from(document.getElementsByClassName("down"));
const creaturesNotGraded = Array.from(document.getElementsByClassName("nowvisible"));
const creaturesGraded = Array.from(document.getElementsByClassName("hidden"));

btnsUp.forEach(btn => {
  btn.addEventListener("click", () => {
    const thisLI = btn.parentNode;
    const thatLI = thisLI.nextElementSibling;

    thisLI.classList.remove("nowvisible");
    thisLI.classList.add("hidden");
    thatLI.classList.remove("hidden");
    thatLI.classList.add("nowvisible");
  });
});

btnsDown.forEach(btn => {
  btn.addEventListener("click", () => {
    const thisLI = btn.parentNode;
    const thatLI = thisLI.previousElementSibling;

    thisLI.classList.add("hidden");
    thisLI.classList.remove("nowvisible");
    thatLI.classList.add("nowvisible");
    thatLI.classList.remove("hidden");
  });
});

const btnsAddInfo = Array.from(document.getElementsByClassName("scroll"));

btnsAddInfo.forEach(btn => {
  btn.addEventListener("click", () => {
    const thisSpan = btn.parentNode.nextElementSibling;
    thisSpan.classList.toggle("additional");
    const secondSpan = btn.parentNode.nextElementSibling.nextElementSibling;
    secondSpan.classList.toggle("additional");
  });
});