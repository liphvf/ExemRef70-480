// function Book () {
//   // just creates an  empty book.
//   this.test = "a"
// }

//  Book.prototype.ISBN = ''
//  Book.prototype.Length = 350
//  Book.prototype.genre = ''
//  Book.prototype.covering = ''
//  Book.prototype.author = new Author()
//  Book.prototype.currentPage = 0
//  Book.prototype.title = ''

// var b = new Book()
// console.log(b.Length)

// function Author () {
// }

// Author.prototype = {
//   firstName: '',
//   lastName: '',
//   gender: '',
//   BookCount: 0
// }

// function PopUpBook () {
//   Book.call(this)
// }
// // PopUpBook.prototype = Book.prototype
// PopUpBook.prototype.hasSound = false
// PopUpBook.prototype.showPopUp = function ShowPop () {}

// var p = new PopUpBook()
// console.log(p.Length)

// var popupBook1 = Object.create(Book.prototype, {
//   hasSound: { value: true },
//   showPopUp: {
//     value: function showPop () {
//       // do logic to show a popup
//     }
//   }
// })

// function Book () {
//   this.test = "as"
//   this.test2 = "as"
// }

// Book.prototype.Xuxu = "a"

// function Book2() {
//     Book.call(this)
// }

// var x = new Book2()

// console.log(x.Xuxu)

// function Teste () {

// }
// Teste.prototype.hasSound = false
// Teste.prototype.haha = "alo"

// function Xuxa() {

// }
// Xuxa.prototype = Teste

// var a = new Xuxa()
// console.log(a.haha)

// var evenNumbers = new Array(9, 2, 4, 6, 8, 9, 10, 12)
// var allEven = evenNumbers.some(evenNumberCheck, evenNumbers)
// if (allEven) {
//   console.log('yes')
// } else {
//   console.log('no')
// }

// function evenNumberCheck (value, index, array) {
//   return (value % 2) == 0
// }

// var money = [12.8, 15.9, 21.7, 35.2]
// var roundedMoney = money.map(roundOff, money)

// console.log(`Valor antes do map: ${money}`)
// function roundOff (value, position, array) {
//   return Math.round(value)
// }

// console.log(`Resultado do map: ${roundedMoney}`)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var factorials = numbers.reduce(factorial);
function factorial (previous, current) {
  return previous * current;
}
console.log(factorials);
