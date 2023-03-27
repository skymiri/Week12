const buttonRef = document.querySelector("button");

function alertUser() {
  alert("You clicked it");
  //buttonRef.removeEventListener("click", alertUser);
}

// buttonRef.addEventListener("click", alertUser, {
//   capture: true,
//   once: true,
//   passive: true,
// });

function changeBgdColor() {
  // 1. change background color to pink
  //   document.body.style.backgroundColor = "pink";
  document.body.classList.toggle("pinkbgd");
}

buttonRef.addEventListener("click", changeBgdColor);

function changeBtnName() {
  // 1. change button clicked and clicked me
  if (buttonRef.textContent === "Click me") {
    buttonRef.textContent = "Clicked!";
  } else {
    buttonRef.textContent = "Click me";
  }
}

buttonRef.addEventListener("click", changeBtnName);
