var form = document.querySelector(".search-hotel form");
var btn = document.querySelector(".search-hotel button[type='button']");

btn.addEventListener("click", function () {
  var classList = form.classList;
  form.style.display = "block";
  classList.toggle("show");
  classList.toggle("hide");
});







