function mainTabRenderer() {
  let tabHolder = document.getElementsByClassName("tabContent");
  let contentHolder = document.createElement("div");
  let title = document.createElement("div");
  let smallContent = document.createElement("div");

  contentHolder.setAttribute("class","Page");
  contentHolder.className += " main"
  title.setAttribute("class","mainTitle");
  smallContent.setAttribute("class","mainContent");

  title.innerHTML = "Who let the dogs out.";
  smallContent.innerHTML = "Kimochiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";

  contentHolder.appendChild(title);
  contentHolder.appendChild(smallContent);
  tabHolder[0].appendChild(contentHolder);
}

export{mainTabRenderer};