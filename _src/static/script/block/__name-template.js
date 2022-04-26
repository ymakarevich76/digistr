if (document.querySelector('.card')) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('.card__title');

    const blackoutText = card.querySelector('.blackout__text');

    blackoutText.textContent = `Шаблон интернет-магазина ${title.textContent}`
  })
}
