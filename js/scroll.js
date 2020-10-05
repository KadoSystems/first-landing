const scrollButton = document.querySelector('.scroll-down');
const howItWorks = document.querySelector('#functionalities');
const bottomLogo = document.querySelectorAll('.full-logo-small');
const navBar = document.querySelector('.navbar')

const scrollDown = scrollButton.addEventListener('click', (event) => {
  functionalities.scrollIntoView({
    behavior: "smooth"
  });
});

const scrollUp = bottomLogo.forEach(item => {
  item.addEventListener('click', (event) => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});
