const modal = (triggerSelector, modalSelector, closeSelector) => {
  const triggers = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    closeBtn = document.querySelector(closeSelector);

  const modalOpen = () => {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  const modalClose = () => {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }

  triggers.forEach(item => {
    item.addEventListener('click', (e) => {

      console.log(e.target)

      if (e.target) {
        e.preventDefault();
      }
      modalOpen();
    })
  })

  closeBtn.addEventListener('click', () => {
    modalClose();
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modalClose();
    }
  })
}

if (document.querySelector('[data-modal]')) {
  modal('[data-modal]', '.modal', '.modal__close');
}

