var btn = document.getElementById('btn-div');
var ver = document.querySelector('.ver');
btn.addEventListener('click', function() {
    
  if(ver.style.display === 'none') {
      ver.style.display = 'block';
  } else {
      ver.style.display = 'none';
  }
});

/***************/
const btnMobile = document.getElementById('btndiv');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const ver = document.getElementById('content-xl-1');
  ver.classList.toggle('active');
  const active = ver .classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar card');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir card');
  }
}

bntdiv.addEventListener('click', toggleMenu);
bntdiv.addEventListener('touchstart', toggleMenu);