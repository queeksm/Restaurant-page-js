const mainTabRenderer = () => {
  const tabHolder = document.getElementsByClassName('tabContent');
  const contentHolder = document.createElement('div');
  const title = document.createElement('div');
  const smallContent = document.createElement('div');

  contentHolder.setAttribute('class', 'Page');
  contentHolder.className += ' main active';
  title.setAttribute('class', 'mainTitle');
  smallContent.setAttribute('class', 'mainContent');

  title.innerHTML = 'Welcome to our restaurant.';
  smallContent.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui velit,'
   + 'fermentum vel erat in, molestie congue sapien. Pellentesque aliquet, eros sit amet tincidunt interdum,'
   + 'dui lorem aliquam augue, at maximus enim ipsum a enim. Curabitur sed ultrices augue, eu vulputate lectus.'
   + 'Duis eu egestas mi, non porttitor nisi. Morbi dui ipsum, euismod et vestibulum vitae, iaculis sed urna. '
   + 'Proin sed neque sit amet lacus convallis ullamcorper. Duis laoreet, dolor at rhoncus consectetur, elit diam dapibus urna,'
   + 'in ornare arcu nisl vel justo. Quisque elementum purus consequat dui commodo eleifend. Aliquam leo lacus, vehicula eu nibh in,'
   + 'convallis sollicitudin massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eu ex id lacus convallis gravida eget eu ante.';

  contentHolder.appendChild(title);
  contentHolder.appendChild(smallContent);
  tabHolder[0].appendChild(contentHolder);
};

export { mainTabRenderer as default };