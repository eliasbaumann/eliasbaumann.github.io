(function () {
  var menu = document.querySelector('.mobile-nav');
  if (menu) {
    menu.addEventListener('click', function () {
      document.querySelector('.navigation').classList.toggle('show');
      var isOpen = menu.textContent.trim() !== 'Menu';
      menu.innerHTML = isOpen ? 'Menu' : '&times; Close';
      document.body.classList.toggle('prevent-scroll-mobile');
      document.querySelector('header.main-header').classList.toggle('header-prevent-hide');
    });
  }

  var header = document.querySelector('[data-header]');
  if (header) {
    var startOffset = 90;
    var tolerance = 5;
    var last = 0;
    window.addEventListener('scroll', function () {
      requestAnimationFrame(function () {
        var y = window.pageYOffset;
        if (y <= startOffset) {
          header.classList.remove('sticky-header--fixed', 'sticky-header--hidden');
        } else if (Math.abs(y - last) >= tolerance) {
          if (y > last) {
            header.classList.add('sticky-header--hidden');
            header.classList.remove('sticky-header--fixed');
          } else {
            header.classList.add('sticky-header--fixed');
            header.classList.remove('sticky-header--hidden');
          }
        }
        last = y;
      });
    });
  }
})();
