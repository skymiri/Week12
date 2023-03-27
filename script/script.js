const buttonRef = document.querySelector("button");

function alertUser() {
  alert("You clicked it");
  buttonRef.removeEventListener("click", alertUser);
}

buttonRef.addEventListener("click", alertUser, {
  capture: true,
  once: true,
  passive: true,
});
