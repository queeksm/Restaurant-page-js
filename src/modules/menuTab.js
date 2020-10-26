const recipeer = (index, smallContainer) => {
  const flag = document.getElementById(`recipe-${index}`);
  if (flag == null) {
    const recipe = document.createElement('div');
    const recipeTitle = document.createElement('div');
    const recipeBody = document.createElement('div');
    const recipeBodyImage = document.createElement('img');
    const recipeBodyDescription = document.createElement('div');
    const recipeBodyAdd = document.createElement('div');

    recipe.setAttribute('class', 'recipe');
    recipe.setAttribute('id', `recipe-${index}`);
    recipeTitle.setAttribute('class', 'recipeTitle');
    recipeTitle.setAttribute('id', `recipeTitle-${index}`);
    recipeBody.setAttribute('class', 'recipeBody');
    recipeBodyImage.setAttribute('class', 'recipeBodyImage');
    recipeBodyImage.setAttribute('id', `recipeBodyImage-${index}`);
    recipeBodyDescription.setAttribute('class', 'recipeBodyDescription');
    recipeBodyDescription.setAttribute('id', `recipeBodyDescription-${index}`);
    recipeBodyAdd.setAttribute('class', 'recipeBodyAdd');
    recipeBodyAdd.setAttribute('id', `recipeBodyAdd-${index}`);

    recipeBody.appendChild(recipeBodyImage);
    recipeBody.appendChild(recipeBodyDescription);
    recipeBody.appendChild(recipeBodyAdd);
    recipe.appendChild(recipeTitle);
    recipe.appendChild(recipeBody);
    smallContainer.appendChild(recipe);
  }
};

const menuRenderer = () => {
  const tabHolder = document.getElementsByClassName('tabContent');
  const contentHolder = document.createElement('div');
  const title = document.createElement('div');
  const smallContainer = document.createElement('div');

  for (let index = 0; index < 3; index += 1) {
    recipeer(index, smallContainer);
  }

  contentHolder.setAttribute('class', 'Page');
  contentHolder.className += ' menu active';
  title.setAttribute('class', 'menuTitle');
  smallContainer.setAttribute('class', 'menuContent');

  contentHolder.appendChild(title);
  contentHolder.appendChild(smallContainer);
  tabHolder[0].appendChild(contentHolder);

  const recipeBodyimage0 = document.getElementById('recipeBodyImage-0');
  const recipeBodyimage1 = document.getElementById('recipeBodyImage-1');
  const recipeBodyimage2 = document.getElementById('recipeBodyImage-2');

  recipeBodyimage0.setAttribute('src', '../src/images/img0.jpg');
  recipeBodyimage1.setAttribute('src', '../src/images/img1.jpg');
  recipeBodyimage2.setAttribute('src', '../src/images/img2.jpg');

  const recipeBodyDescription0 = document.getElementById('recipeBodyDescription-0');
  const recipeBodyDescription1 = document.getElementById('recipeBodyDescription-1');
  const recipeBodyDescription2 = document.getElementById('recipeBodyDescription-2');

  recipeBodyDescription0.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit tortor, placerat vitae mauris id, eleifend tempor ex. Morbi et sagittis diam. Etiam et massa ultrices, finibus nisl vitae, mattis felis. Nulla facilisi. Etiam lobortis libero non velit faucibus, eget euismod magna imperdiet. Sed venenatis euismod rutrum. Phasellus id odio lobortis, mattis ipsum in, aliquam ligula.';
  recipeBodyDescription1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit tortor, placerat vitae mauris id, eleifend tempor ex. Morbi et sagittis diam. Etiam et massa ultrices, finibus nisl vitae, mattis felis. Nulla facilisi. Etiam lobortis libero non velit faucibus, eget euismod magna imperdiet. Sed venenatis euismod rutrum. Phasellus id odio lobortis, mattis ipsum in, aliquam ligula.';
  recipeBodyDescription2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit tortor, placerat vitae mauris id, eleifend tempor ex. Morbi et sagittis diam. Etiam et massa ultrices, finibus nisl vitae, mattis felis. Nulla facilisi. Etiam lobortis libero non velit faucibus, eget euismod magna imperdiet. Sed venenatis euismod rutrum. Phasellus id odio lobortis, mattis ipsum in, aliquam ligula.';

  const recipeBodyAdd0 = document.getElementById('recipeBodyAdd-0');
  const recipeBodyAdd1 = document.getElementById('recipeBodyAdd-1');
  const recipeBodyAdd2 = document.getElementById('recipeBodyAdd-2');

  recipeBodyAdd0.innerHTML = 'Lorem Lorem Lorem  9.24$';
  recipeBodyAdd1.innerHTML = 'Lorem Lorem Lorem  9.24$';
  recipeBodyAdd2.innerHTML = 'Lorem Lorem Lorem  9.24$';

  const recipeTitle0 = document.getElementById('recipeTitle-0');
  const recipeTitle1 = document.getElementById('recipeTitle-1');
  const recipeTitle2 = document.getElementById('recipeTitle-2');

  recipeTitle0.innerHTML = 'Recipe Title 0';
  recipeTitle1.innerHTML = 'Recipe Title 1';
  recipeTitle2.innerHTML = 'Recipe Title 2';
};

export { menuRenderer as default };