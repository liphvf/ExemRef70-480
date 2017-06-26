- `<header>` Define o topo de uma sessão ou página.

```
<body>
// TOPO DA PÁGINA
    <header>
        <h1>Some fictional company Website</h1>
    </header>
    <article>
    // TOPO DA SESSÃO
        <header>
            <h1>Our first new Article</h1>
        </header>
        …
</body>

```

Note que ele está sendo usado como o topo de `</article>`

- O uso de `<header>` e `<footer>` não agarante o posicionamento do mesmo, ou seja, ele tem uso semântico.

- `<nav>` usado para descrever o menu, normalmente contem o links principais, enquanto links favoritos poderiam está em um `<aside>`

- `<section>`: Tomando como base um artigo de registro, toda artigo tem sessões referente ao mesmo, a ideia mantem a mesma. 
- Note que o `<h1>` segue uma hierarguia, ou sejá, se ele está no primeiro nível, ele é o maior, se ele está dentro de uma `<article>` já começa a ficar menor, e assim por diante.

- The <aside> element defines any content that doesn’t fall within the main flow or main content of the current page—for example, a sidebar, a note, an alert, or an advertisement. 

- Note que o <aside> só tem valor semantico, para dizer que será colocado ao lado, depois que aplicarmos uma css para colocar ele em seu lugar.

---


Para criar figuras na telas, caso tenha que destruir e reconstruir é mais barato o canvas, porem caso tenha que manipular o mesmo objeto, mudando sua forma ou localidade, seria por svg.


Para evitar colisões de namespace um padrão que pode ser adotado é usar seu namespace ao contrário, exemplo com.microsoft:

```

var com = {};
com.Bookstore = {};
com.Bookstore.Book = {
title: 'my book',
genre: 'fiction'
};
com.Bookstore.Author = {
firstName: 'R',
lastName: 'D'
}
```

- Observe o escopo do this, ele se referencia ao elemento em que você está.
-  Custom objects are created by the developer, whereas native objects are provided by core JavaScript.


---


The `==` operator will compare for equality after doing any necessary type conversions. The `===` operator will not do the conversion, so if two values are not the same type `===` will simply return false. Both are equally quick.

```
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```


## Array

Sizing arrays is very dynamic. In the preceding example, even though the array is initially
declared to have a length of 5, if you try to access the 10th element, the array automatically
resizes to accommodate the requested length. The following example demonstrates this
concept:

```
var anArray = new Array(5);
alert(anArray.length);
anArray[9] = ‘soccer’;
alert(anArray.length);
```

### Concante

```
var sports = new Array( 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var moreSports = new Array('soccer', 'basketball', 'hockey');
var combinedSports = sports.concat(moreSports);
```

### indexOf && lastIndexOf

```
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',
'tennis', 'badminton');
var index = sports.indexOf('football', 0); // Busca ascedente por pelo indice de football, caso não ache, retorna -1
```
- lastIndexOf busca descendete

### reverse
```
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',
'tennis', 'badminton');
sports.reverse() // reverte a ordem
```

## sort
The sort method sequences the items in the array in ascending order. In the sports array, the
sort would be alphabetical, as shown in the following example:

```
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',
'tennis', 'badminton');
alert(sports.indexOf('soccer'));
sports.sort();
alert(sports.indexOf('soccer'))
```

## slice

```
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',
'tennis', 'badminton');
var someSports = sports.slice(1, 2); // Parametros: onde começa e onde termina, porem onde termina não está incluso.
```

## splice

```
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',
'tennis', 'badminton');
var splicedItems = sports.splice(1, 3, 'golf', 'curling', 'darts'); // Substitui apartir do indice 1, 3 elementos por golf, curling, darts. Esse ultimo parametro é opicional, caso omitido ou não estando do mesmo tamanho, o item é removido do array.
```

## pop and push 
retira e adiciona da lista, sempre retirado o final e adiciona no final.