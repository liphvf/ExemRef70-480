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

### Concant

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

## shift unshift
Oposto ao pop e push que remove e adiciona no final da lista, este faz no inicio da lista e retorna o indice no caso de adicionar ou o item que  foi removido.

```
var sports = new Array();
sports.unshift('soccer', 'basketball', 'hockey');
sports.unshift('football');
var nextSport = sports.shift();
```


Taken together, the two concepts you’ve just seen (pop/push and shift/unshift) can be
combined to create the concept of a first-in-first-out queue:

```
var sports = new Array();
sports.push('soccer');
sports.push('basketball');
sports.push('hockey');
var get1 = sports.shift();
sports.push('golf');
var get2 = sports.shift();
```


## Every e Some:
Every executa o call back e sai o primeiro false e o some sai no primeiro true.

## ForEach

```
var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];

sportsArray.forEach(offerSport);
// sportsArray.sort().forEach(offerSport); Poderiamos organizar por ordem alfabetica antes de executar o foreach

function offerSport(value, index, array) {

var sportsList = document.getElementById("sportsList");

var bullet = document.createElement("li");

bullet.innerText = value;

sportsList.appendChild(bullet);

}


```

## Filter

```
var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);

var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);

//work with the even numbers....
function evenNumberCheck(value, index, array) {
return (value % 2) == 0;
}

```


## Map

```

var money = [12.8, 15.9, 21.7, 35.2];
var roundedMoney = money.map(roundOff, money);
…
function roundOff(value, position, array) {
return Math.round(value);
}

```

## reduce and reduceRight 
he reduce and reduceRight methods are recursive. Each result of the callback function is
passed back into the callback method as the previous return value along with the current
element to be passed in. This provides some interesting scenarios. The reduce method pro-
cesses the elements of the array in ascending order, whereas the reduceRight processes the
elements of the array in descending order. The following example demonstrates using the
reduce method to calculate a factorial:

```
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var factorials = numbers.reduce(factorial);
function factorial(previous, current) {
return previous * current;
}
```
Nesse caso a cima ele ira passar por cada número, executar fatorial, e gravar o resultado dele no proximo previuous. Exemplo.
- 1 - Execução:
    - 1* 2 = **2**;
- 2 - Execução:
    - 3 * **2** = 5;

## for loop

```
for (var i = 0; i < 10; i++) {
document.write(i);
}
```
## for in loop
```
var person = { firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender:
"female" };
for (var prop in person) {
document.write(person[prop]);
}   
```

## While
```

var i = 0;
while (i < 10) {
//do some work here.
i++;
}
```

## do .. while
```

var canvas = document.getElementById("canvas1");
do {
//stop traffic
}while(canvas.styles.backgroundColor == 'red')
```

## Focus, Blur, Focusin, Focusout

Primeiro roda o focus depois o focusin.
Focus > Focusin
Blur > Focusout

## keydown, keypress, keyup

O evento de keydown e keypress são similiares, porem o keydown vem antes e em algumas teclas o que press não funciona, exemplo: `Ctrl`, `Shift`  e qual quer combinações destes.