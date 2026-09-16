
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (this.scrollY > 100) {
    navbar.classList.add("navbar-small");
  } else {
    navbar.classList.remove("navbar-small");
  }
});
