(function () {
  try {
    var tema = localStorage.getItem('brynvel-theme');
    if (tema) document.documentElement.dataset.theme = tema;
  } catch (e) {}
})();
