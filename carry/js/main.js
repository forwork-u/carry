(function () {
  'use strict';

  // ハンバーガーメニュー
  var body = document.body;
  var burger = document.querySelector('.burger');
  if (burger) {
    var setMenu = function (open) {
      body.classList.toggle('is-menu-open', open);
      burger.setAttribute('aria-expanded', String(open));
    };
    burger.addEventListener('click', function () {
      setMenu(!body.classList.contains('is-menu-open'));
    });
    document.querySelectorAll('.drawer a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) setMenu(false);
    });
  }

  // カラー切り替え
  var stage = document.querySelector('.colors');
  if (!stage) return;
  var mainImg = stage.querySelector('.colors__main');
  var tint = stage.querySelector('.colors__tint');
  var nameEl = stage.querySelector('.colors__name-en');
  var jaEl = stage.querySelector('.colors__name-ja');
  var swatches = stage.querySelectorAll('.swatch');

  function pick(key) {
    var src = stage.querySelector('.swatch[data-color="' + key + '"]');
    if (!src) return;
    mainImg.src = src.dataset.img;
    mainImg.alt = key;
    tint.style.background = src.dataset.tint;
    nameEl.textContent = key;
    jaEl.textContent = src.dataset.ja;
    swatches.forEach(function (s) {
      var on = s.dataset.color === key;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-pressed', String(on));
    });
  }

  stage.querySelectorAll('[data-color]').forEach(function (el) {
    el.addEventListener('click', function () { pick(el.dataset.color); });
  });
})();
