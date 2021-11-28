function setMenu(_menu) {
  let menus = document.querySelectorAll("nav li");
  menus.forEach((menu) => menu.classList.remove("on"));
  document.querySelector("nav li." + _menu).classList.add("on");

  document.querySelector("main").className = _menu;
}

function setDescLength() {
  document.querySelector("span.descLength").innerHTML =
    document.querySelector("input.description").value.length + "/20";
}
