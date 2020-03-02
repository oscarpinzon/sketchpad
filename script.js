"use strict";

function createGrid(gridWidth = 16) {
  const gridSize = gridWidth * gridWidth;
  document.querySelector(
    ".grid-container"
  ).style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
  let grid;
  for (var i = 0; i < gridSize; i++) {
    grid = document.createElement("div");
    grid.className = "grid-square";
    let opacity = 0.1;
    const opacityIncrease = 0.25;
    grid.addEventListener("mouseover", () => {
      event.target.style.backgroundColor = `rgba(0,0,0,${opacity})`;
      opacity += opacityIncrease;
    });
    document.querySelector(".grid-container").appendChild(grid);
  }
}

function resetGrid() {
  const grid = document.getElementById("container");
  grid.textContent = "";
}

function getUserInput() {
  let validInput = false;
  let gridDimension;
  while (!validInput) {
    gridDimension = Number(window.prompt("Insert Grid Size", ""));
    validInput = Number.isInteger(gridDimension);
  }
  return gridDimension;
}

function resetAndResize() {
  let userInput;
  userInput = getUserInput();
  if (userInput > 0) {
    resetGrid();
    createGrid(userInput);
  } else {
    alert("Sorry! Must be more than 0!");
    resetGrid();
    createGrid();
  }
}

createGrid();
