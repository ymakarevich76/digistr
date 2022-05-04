if (document.querySelector('.store-accordion__tab')) {
  const accordionTabsContent = document.querySelectorAll('.store-accordion__tab-content');

  const setAccordionTabTop = () => {

    accordionTabsContent.forEach(accordionTabContent => {
      const accordionTabContentParent = accordionTabContent.closest('.store-accordion__tab'),
        height = window.getComputedStyle(accordionTabContentParent).height;


      accordionTabContentParent.addEventListener('click', () => {
        accordionTabContent.style.top = height;
      })
    })
  }
  setAccordionTabTop();
  window.addEventListener('resize', setAccordionTabTop);

}


if (document.querySelector('.accordion')) {
  const accordionBlocks = document.querySelectorAll('.accordion__block');

  accordionBlocks.forEach(item => {
    item.lastElementChild.classList.add('hide');

    item.firstElementChild.addEventListener('click', (e) => {
      e.target.nextElementSibling.classList.toggle('hide');
      e.target.classList.toggle('active');
    })
  })
}
