let animate = document.querySelectorAll("section");

window.onscroll = () => {
  animate.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 610;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.remove("card");
      sec.classList.add("change");
    }
  });
};

console.log(animate);
