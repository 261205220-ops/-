document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 500) + "px";
    el.style.top = (Math.random() * 250) + "px";
  });
});

document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {

    // top: 180〜325 → 180 + (0〜145)
    el.style.top = (180 + Math.random() * 145) + "px";

    // left: 350〜825 → 350 + (0〜475)
    el.style.left = (350 + Math.random() * 475) + "px";

  });
});
