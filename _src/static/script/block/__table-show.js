if (document.querySelector('.tariffs__link')) {
  const moreBtn = document.querySelector('.tariffs__link'),
    table = document.querySelector('.tariffs__table');

  moreBtn.addEventListener('click', (e) => {
    if (table.classList.contains('hide')) {
      table.classList.remove('hide');
      e.target.parentNode.firstElementChild.textContent = '-';
    } else {
      table.classList.add('hide');
      e.target.parentNode.firstElementChild.textContent = '+';
    }
  })
}
