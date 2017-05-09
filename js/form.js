var form = document.querySelector(".search-hotel form");
var btn = document.querySelector(".search-hotel button[type='button']");

form.classList.add("hide");

btn.addEventListener("click", function () {
  form.classList.toggle("hide");
  form.classList.toggle("show");
});
