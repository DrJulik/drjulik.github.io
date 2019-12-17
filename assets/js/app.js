const theme_toggler = document.querySelector('#theme-toggler');

theme_toggler.addEventListener('change', e => {
  if (e.target.checked) {
    document.body.classList.toggle('light');
  } else {
    document.body.classList.toggle('light');
  }
});
