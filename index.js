function toggleMenu() {
  var nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  const cardContainer = document.querySelector(".card-container");
  const containerTop = cardContainer.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (containerTop < triggerPoint) {
    cardContainer.classList.add("show");
  }
});
window.addEventListener("scroll", function () {
  const visionContainer = document.querySelector(".vision-container");
  const containerTop = visionContainer.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (containerTop < triggerPoint) {
    visionContainer.classList.add("show");
  }
});
window.addEventListener("scroll", function () {
  const missionContainer = document.querySelector(".mission-container");
  const containerTop = missionContainer.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (containerTop < triggerPoint) {
    missionContainer.classList.add("show");
  }
});
window.addEventListener("scroll", function () {
  const container = document.querySelector(".beneficiaries-container");
  const containerTop = container.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (containerTop < triggerPoint) {
    container.classList.add("show");
  }
});
window.addEventListener("scroll", function () {
  const partnersContainer = document.querySelector(".partners-container");
  const containerTop = partnersContainer.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (containerTop < triggerPoint) {
    partnersContainer.classList.add("show");
  }
});
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}
