if (document.querySelector('.tariffs__link')) {
  const moreBtn = document.querySelector('.tariffs__link'),
    table = document.querySelector('.tariffs__table');

  moreBtn.addEventListener('click', (e) => {
    const target = e.target;

    if (target) {
      if (table.classList.contains('hide')) {
        table.classList.remove('hide');
        target.firstElementChild.textContent = '-';
      } else {
        table.classList.add('hide');
        target.firstElementChild.textContent = '+';
      }
    }
  })
}
