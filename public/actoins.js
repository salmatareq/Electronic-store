const hidden_menu = document.querySelector(".hide");
const arrow = document.querySelector(".toclick");

arrow.addEventListener("click", function () {
  if (hidden_menu.style.display === "block") {
    hidden_menu.style.display = "none";
  } else {
    hidden_menu.style.display = "block";
  }
});
console.log("done");

