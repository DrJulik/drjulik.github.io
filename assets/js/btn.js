// Disabling the scroll at the top
const bttBtn = document.querySelector('.back-to-top');

window.onscroll = function() {
  scrollFunction();
};

bttBtn.style.display = 'none';

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    bttBtn.style.display = 'block';
  } else {
    bttBtn.style.display = 'none';
  }
}

$('.back-to-top').on('click', function() {
  const header = $('.site-header').position().top;

  $('html, body').animate(
    {
      scrollTop: header
    },
    900
  );
});
