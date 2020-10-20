function contactRenderer() {
  let tabHolder = document.getElementsByClassName("tabContent");
  let contentHolder = document.createElement("div");
  let title = document.createElement("div");
  let smallContainer = document.createElement("div");

  contentHolder.setAttribute("class","Page");
  contentHolder.className += " contact"
  title.setAttribute("class","contactTitle");
  smallContainer.setAttribute("class","contactContent");

  title.innerHTML = "Who let the cats in.";
  smallContainer.innerHTML = "Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda";

  contentHolder.appendChild(title);
  contentHolder.appendChild(smallContainer);
  tabHolder[0].appendChild(contentHolder);
}

export{contactRenderer};