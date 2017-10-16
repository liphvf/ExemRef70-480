// Retorna o priemiro elemento com esse id.
var pegaElementoPorId = document.getElementById("outerDiv");
console.log(pegaElementoPorId);

// Retorna lista de elementos por classe
var pegaElementoPorClasse = document.getElementsByClassName("mainPara");
console.log(pegaElementoPorClasse)

// Lista de elemtnso por tag
var pegaElementoPorTag = document.getElementsByTagName("li");
console.log(pegaElementoPorTag);

// Utiliza os seletores de css, pega o primeiro elemento que bate
var query = document.querySelector("li");
console.log(query);

// Utiliza os seletores de css, pega todos
var queryAll = document.querySelectorAll("li");
console.log(queryAll);


// childNodes --> children


// childNodes A collection of all child nodes of the parent element.
// firstChild A reference to the very first child node in the list of child nodes of the parent node.
// lastChild A reference to the very last child node in the list of the child nodes of the parent node.
// hasChildNodes A useful property that returns true if the parent element has any child nodes at all. A good practice is to check this property before accessing other properties, such as firstChild or lastChild.
