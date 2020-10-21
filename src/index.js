import './style.css';
import {masterController} from './modules/renderer.js';
import {mainTabRenderer} from './modules/mainTab.js';
import {menuRenderer} from './modules/menuTab.js';
import {contactRenderer} from './modules/contact.js';

function tabCleaner(tab){
  let currentPages = document.getElementsByClassName("Page");

  for (let index = 0; index < currentPages.length; index++) {    
    if (currentPages[index].className != tab[0].className){      
      currentPages[index].className = currentPages[index].className.replace('active','none');
    }
    else {
      currentPages[index].className = currentPages[index].className.replace('none','active');
    }
  }
}

function tabFiller (tabId) {  
  switch (tabId) {
    case "tabOne":      
      let flag = document.getElementsByClassName("main");
      if (flag[0] == null){
        mainTabRenderer();
      }
      tabCleaner(flag);    
      break;
    case "tabTwo":      
      let flag2 = document.getElementsByClassName("menu");
      if (flag2[0] == null){        
        menuRenderer();
      }
      tabCleaner(flag2);
      break;
    case "tabThree":
      let flag3 = document.getElementsByClassName("contact");
      if (flag3[0] == null){        
        contactRenderer();
      }
      tabCleaner(flag3);
      break;
    default:
      break;    
  }
}

function toggler(mContainer,tab){
  mContainer.style.display = "initial";
  tabFiller(tab);
}

function styler(evt) {
  let mContainer = document.getElementsByClassName("tabContent");
  let tabs = document.getElementsByClassName("tab");  

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("active", "");    
  }  

  evt.currentTarget.className += " active";
  toggler(mContainer[0],evt.currentTarget.id);
}


masterController();

export {styler};



