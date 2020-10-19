import {styler} from '../index';


function masterController(){
  let mContainer = document.getElementById("content");
  let tabManager = document.createElement("div");
  tabManager.setAttribute("class","tabManager");

  let tabs = document.createElement("div");
  tabs.setAttribute("class","tabs");

  let tabOne = document.createElement("button");
  let tabTwo = document.createElement("button");
  let tabThree = document.createElement("button");

  let tabContent = document.createElement("div");
  tabContent.style.display = "none";

  tabOne.setAttribute("class","tab");
  tabTwo.setAttribute("class","tab");
  tabThree.setAttribute("class","tab");
  tabOne.setAttribute("id","tabOne");
  tabTwo.setAttribute("id","tabTwo");
  tabThree.setAttribute("id","tabThree");
  tabContent.setAttribute("class","tabContent");
  tabOne.addEventListener("click",styler);
  tabTwo.addEventListener("click",styler);
  tabThree.addEventListener("click",styler);

  tabOne.innerHTML = 'Tab One';
  tabTwo.innerHTML = 'Tab Two';
  tabThree.innerHTML = 'Tab Three';  

  tabs.appendChild(tabOne);
  tabs.appendChild(tabTwo);
  tabs.appendChild(tabThree);
  tabManager.append(tabs);
  tabManager.appendChild(tabContent);

  mContainer.appendChild(tabManager);  
}

export {masterController}
