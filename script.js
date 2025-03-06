const divContainer = document.querySelector("#div-container");
let divVar;
function createBoard() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      divVar = document.createElement("div");
      divVar.style.cssText =
        "width: 6%; height: 6%; flex: 1 1 auto; border: 1px solid black;";
      divVar.setAttribute("id", `${j.toString() + i.toString()}`);
      divVar.setAttribute("class", "divEtch");
      divContainer.appendChild(divVar);
    }
  }
}
function getList() {
  const divList = document.querySelectorAll(".divEtch");
  divList.forEach(function (currentValue) {
    currentValue.addEventListener("mouseover", function () {
      currentValue.style.setProperty("background-color", "black");
    });
  });
  return divList;
}
createBoard();
let divList = getList();
let newSize;

const clearButton = document.querySelector("#clear");
const changeSizeButton = document.querySelector("#new-size");

clearButton.addEventListener("click", function () {
  divList.forEach(function (currentValue) {
    currentValue.remove();
  });
  createBoard();
  divList = getList();
});

changeSizeButton.addEventListener("click", function () {
  newSize = prompt("Enter a size between 0 - 100");
  divList.forEach(function (currentValue) {
    currentValue.remove();
  });
});
