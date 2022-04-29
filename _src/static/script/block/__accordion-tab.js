if (document.querySelector('.accordion__tab')) {
  const accordionTabsContent = document.querySelectorAll('.accordion__tab-content');

  const setAccordionTabTop = () => {

    accordionTabsContent.forEach(accordionTabContent => {
      const accordionTabContentParent = accordionTabContent.closest('.accordion__tab'),
        height = window.getComputedStyle(accordionTabContentParent).height;


      accordionTabContentParent.addEventListener('click', () => {
        accordionTabContent.style.top = height;
      })
    })
  }
  setAccordionTabTop();
  window.addEventListener('resize', setAccordionTabTop);

}
