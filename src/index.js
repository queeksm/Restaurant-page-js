import './style.css';
import { masterController } from './modules/renderer';
import { mainTabRenderer } from './modules/mainTab';
import { menuRenderer } from './modules/menuTab';
import { contactRenderer } from './modules/contact';

function tabCleaner(tab) {
  let currentPages = document.getElementsByClassName('Page');

  for (let index = 0; index < currentPages.length; index += 1) {
    if (currentPages[index].className !== tab[0].className) {
      currentPages[index].className = currentPages[index].className.replace('active', 'none');
    }
    else {
      currentPages[index].className = currentPages[index].className.replace('none', 'active');
    }
  }
}

function tabFiller(tabId) {
  let flag = document.getElementsByClassName('main');
  let flag2 = document.getElementsByClassName('menu');
  let flag3 = document.getElementsByClassName('contact');
  switch (tabId) {
    case 'tabOne':
      if (flag[0] == null) {
        mainTabRenderer();
      }
      tabCleaner(flag);
      break;
    case 'tabTwo':
      if (flag2[0] == null) {
        menuRenderer();
      }
      tabCleaner(flag2);
      break;
    case 'tabThree':
      if (flag3[0] == null) {
        contactRenderer();
      }
      tabCleaner(flag3);
      break;
    default:
      break;
  }
}

function toggler(mContainer, tab) {
  mContainer.style.display = 'initial';
  tabFiller(tab);
}

function styler(evt) {
  let mContainer = document.getElementsByClassName('tabContent');
  let tabs = document.getElementsByClassName('tab');

  for (let i = 0; i < tabs.length; i += 1) {
    tabs[i].className = tabs[i].className.replace('active', '');
  }

  evt.currentTarget.className += ' active';
  toggler(mContainer[0], evt.currentTarget.id);
}

masterController();

export { styler };