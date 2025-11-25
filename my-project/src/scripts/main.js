'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('icon--menu');
    burger.classList.toggle('icon--menu-click');
    // href="#menu" працює автоматично, прокрутка до меню спрацьовує
  });
});
