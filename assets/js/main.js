// ELLIN COMPANY — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('siteHeader');
  var isSubPage = header && header.dataset.solid === 'true';

  function setHeaderState() {
    if (!header) return;
    if (isSubPage) { header.classList.add('solid'); return; }
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  setHeaderState();
  window.addEventListener('scroll', setHeaderState);

  // mobile nav
  var burger = document.getElementById('burgerBtn');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
      burger.classList.toggle('isopen');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        burger.classList.remove('isopen');
      });
    });
  }

  // footer year
  document.querySelectorAll('.footer-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // reveal on scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
});
