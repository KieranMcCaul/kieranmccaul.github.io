// text and backgroun slides
function transitionOut() {
  let elText = document.getElementById("leftText");
  let elBackground = document.getElementById("background");

  elText.classList.add("textOut");
  elBackground.classList.add("transitionOut");
}

function transitionIn() {
  let elText = document.getElementById("leftText");
  let elBackground = document.getElementById("background");

  elText.classList.add("textIn");
  elBackground.classList.add("transitionIn");
}
