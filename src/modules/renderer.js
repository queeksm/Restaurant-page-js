const masterController = (styler) => {
  const mContainer = document.getElementById('content');
  const tabManager = document.createElement('div');
  tabManager.setAttribute('class', 'tabManager');

  const tabs = document.createElement('div');
  tabs.setAttribute('class', 'tabs');

  const tabOne = document.createElement('button');
  const tabTwo = document.createElement('button');
  const tabThree = document.createElement('button');

  const tabContent = document.createElement('div');
  tabContent.style.display = 'none';

  tabOne.setAttribute('class', 'tab');
  tabTwo.setAttribute('class', 'tab');
  tabThree.setAttribute('class', 'tab');
  tabOne.setAttribute('id', 'tabOne');
  tabTwo.setAttribute('id', 'tabTwo');
  tabThree.setAttribute('id', 'tabThree');
  tabContent.setAttribute('class', 'tabContent');
  tabOne.addEventListener('click', styler);
  tabTwo.addEventListener('click', styler);
  tabThree.addEventListener('click', styler);

  tabOne.innerHTML = 'About us';
  tabTwo.innerHTML = 'Menu';
  tabThree.innerHTML = 'Contact us';

  tabs.appendChild(tabOne);
  tabs.appendChild(tabTwo);
  tabs.appendChild(tabThree);
  tabManager.append(tabs);
  tabManager.appendChild(tabContent);

  mContainer.appendChild(tabManager);
};

export { masterController as default };
