let childs = document.querySelector("#parentLi").childNodes;
let element = childs[3];
element.parentNode.removeChild(element);
