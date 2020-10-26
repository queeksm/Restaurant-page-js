const contactRenderer = () => {
  const tabHolder = document.getElementsByClassName('tabContent');
  const contentHolder = document.createElement('div');
  const title = document.createElement('div');
  const smallContainer = document.createElement('div');

  contentHolder.setAttribute('class', 'Page');
  contentHolder.className += ' contact active';
  title.setAttribute('class', 'contactTitle');
  smallContainer.setAttribute('class', 'contactContent');

  title.innerHTML = 'Get in contact';
  smallContainer.innerHTML = 'Call us to the number 999999999999999 or email us kuahfahfkasfh@gmail.com';

  contentHolder.appendChild(title);
  contentHolder.appendChild(smallContainer);
  tabHolder[0].appendChild(contentHolder);
};

export { contactRenderer as default };