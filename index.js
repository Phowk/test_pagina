
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btnScrollTop');
const regresar = document.querySelector('.enlace-lista');

  function isOutOfView(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom < 0;
  }

  window.addEventListener('scroll', function() {
    if (isOutOfView(regresar)) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


