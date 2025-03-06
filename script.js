const divContainer = document.querySelector("#div-container");
let divVar;
let newSize = 16;
function createBoard(newSize) {
  size = 100 / newSize;
  size = size.toFixed(2);
  console.log(size);
  for (let i = 0; i < newSize; i++) {
    for (let j = 0; j < newSize; j++) {
      divVar = document.createElement("div");
      divVar.style.cssText = `width: ${size}%; height: ${size}%; flex: 1 1 auto; border: 1px solid black;`;
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
createBoard(newSize);
let divList = getList();

const clearButton = document.querySelector("#clear");
const changeSizeButton = document.querySelector("#new-size");

clearButton.addEventListener("click", function () {
  divList.forEach(function (currentValue) {
    currentValue.remove();
  });
  createBoard(newSize);
  divList = getList();
});

changeSizeButton.addEventListener("click", function () {
  do {
    newSize = prompt("Enter a size between 0 - 100");
  } while (newSize < 0 || newSize > 100);

  divList.forEach(function (currentValue) {
    currentValue.remove();
  });
  createBoard(newSize);
  divList = getList();
});
