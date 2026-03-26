import './style.css'

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  logo.classList.add('spring');

  setTimeout(() => {
    logo.classList.remove('spring');
  }, 900);
});
