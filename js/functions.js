
var aboutMeBtn = document.getElementById("aboutMe");
aboutMeBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


var researchBtn = document.getElementById("research");
researchBtn.onclick = () => {
  window.scrollTo({
    top: 400,
    left: 0,
    behavior: 'smooth'
  });
}

var projectsBtn = document.getElementById("projects");
projectsBtn.onclick = () => {
  window.scrollTo({
    top: 1000,
    left: 0,
    behavior: 'smooth'
  });
}