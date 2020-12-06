function changeCss () {
    var bodyElement = document.querySelector("body");
    var navElement = document.querySelector(".navbar-nav ");
    this.scrollY > 5 ? navElement.style.opacity = .7 : navElement.style.opacity = 1;
  }
  window.addEventListener("scroll", changeCss , false);

  const btn = document.getElementById('btn');

btn.addEventListener('click', () => window.scrollTo({
  top: 670,
  behavior: 'smooth',
}));


const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => window.scrollTo({
  top: -670,
  behavior: 'smooth',
}));

