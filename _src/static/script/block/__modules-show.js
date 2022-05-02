if (document.querySelector('.modules')) {
  const modulesContent = document.querySelectorAll('.modules__content');

  modulesContent.forEach(item => {
    item.querySelector('.modules__link').addEventListener('click', (e) => {
      // e.preventDefault();
      // e.target.previousElementSibling.classList.remove('hide');
      // e.target.remove();

    })
  })
}
