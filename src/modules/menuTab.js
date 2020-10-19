function recipeer(index,smallContainer) {
  let flag = document.getElementById(`recipe-${index}`);
  if (flag == null){
    let recipe = document.createElement("div");
    let recipeTitle = document.createElement("div");
    let recipeBody = document.createElement("div");
    let recipeBodyImage = document.createElement("img");
    let recipeBodyDescription = document.createElement("div");
    let recipeBodyAdd = document.createElement("div");
    
    recipe.setAttribute("class","recipe");
    recipe.setAttribute("id",`recipe-${index}`);
    recipeTitle.setAttribute("class","recipeTitle");
    recipeBody.setAttribute("class","recipeBody");
    recipeBodyImage.setAttribute("class",`recipeBodyImage-${index}`);
    recipeBodyDescription.setAttribute("class",`recipeBodyDescription-${index}`);
    recipeBodyAdd.setAttribute("class",`recipeBodyAdd-${index}`);

    recipeBody.appendChild(recipeBodyImage);
    recipeBody.appendChild(recipeBodyDescription);
    recipeBody.appendChild(recipeBodyAdd);
    recipe.appendChild(recipeTitle);
    recipe.appendChild(recipeBody);
    smallContainer.appendChild(recipe);
  }
}

function menuRenderer() {
  let tabHolder = document.getElementsByClassName("tabContent");
  let contentHolder = document.createElement("div");
  let title = document.createElement("div");
  let smallContainer = document.createElement("div");

  for (let index = 0; index < 3; index++) {
    recipeer(index,smallContainer);
  }
  
  contentHolder.setAttribute("class","Page");
  contentHolder.className += " menu"
  title.setAttribute("class","menuTitle");
  smallContainer.setAttribute("class","menuContent");



  contentHolder.appendChild(title);
  contentHolder.appendChild(smallContainer);
  tabHolder[0].appendChild(contentHolder);

}

export{menuRenderer};