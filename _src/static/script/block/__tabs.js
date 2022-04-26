function tabsWork(tabsSelector, tabsContainerSelector, tabsContentSelector, activeClass) {

  const tabs = document.querySelectorAll(tabsSelector);
  const tabsContainer = document.querySelector(tabsContainerSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);

  const hideTabsContent = () => {
    tabs.forEach(tab => {
      tab.classList.remove(activeClass);
    });

    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    })

  }

  const showTabsContent = (i = 0) => {
    tabs[i].classList.add(activeClass);
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
  }

  hideTabsContent();
  showTabsContent();

  tabsContainer.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (item == target) {
          hideTabsContent();
          showTabsContent(i);
        }
      })
    }
  })
}

// tabsWork('.product-tabs__item', '.product-tabs__items', '.product-tabs__content', 'active');


tabsWork('.tariffs-tabs__item', '.tariffs-tabs__items', '.tariffs-tabs__content', 'active');
