// algoritmo para dom
// var rawBase = document.getElementById('base');
// var rawSymbol = document.getElementById('symbol');
// var rawColor = document.getElementById('color');

// var pyramid = document.getElementById('piramide')
// var base, symbol, color;

// getBase = function() {
//     base = rawBase.value;
// }

// getSymbol = function() {
//     symbol = rawSymbol.value;
// }

// rawBase.addEventListener('keyup', getBase)
// rawSymbol.addEventListener('keyup', getSymbol)

// createPyramid = function() {
//     line = '';
//     pyramid.innerHTML = line;
//     color = rawColor.value;

//     for (var i = 0; i < base; i++) {
//         pyramid.innerHTML += '<p class="line">' + (line +=  ('<span class="symbols">' +  symbol + '</span>')) + '</p>';
//     }
//     pyramid.style.color = color;
// }

// Algoritmo para consola
Base = 10;
Char = '*';
linea = '';

for (let i = 0; i < Base; i++) {
    console.log(linea += Char)
    // console.log(linea = linea + Char)
}






// if (0 == "0") {
    // console.log('0 es igual a 0');
    
    // console.log(typeof(0));
    // console.log(typeof('0'));
    
    
    // console.log('50 ' + 10);// 50 10
    // console.log(typeof('50 ' + 10));//string
    // console.log(10 + ' 50 ');//10  50
    // console.log(typeof(10 + ' 50 '));//string

    // // console.log(10 + Number('50'));//60
    // // console.log(typeof(10 + Number('50')));//number
    // console.log(0 +'');
    // console.log(typeof(0 +''));
    
    // console.log('50 ' - 0);// 50
    // console.log(typeof('50 ' - 0));// number
    // console.log(0 - ' 50 ');//-50
    // console.log(typeof(0 - ' 50 '));//number
    // console.log(Number('50 '));//50
    // console.log(typeof(Number('50 ')));//number
    // console.log(String(50));//"50"
    // console.log(typeof(String(50)));//string

    // console.log('5' * '5');//25 undefined NaN
    // console.log(typeof('5' * '5'))//string
    
    // console.log('5' / '5');
    // //1
    // console.log(typeof('5' / '5'))
    // //number
// }

// if (0 === "0") {
    
//     console.log('son iguales ');
// }else{

//     console.log(typeof(0));
//     console.log(typeof('0'));
//     console.log('no son iguales');
    
// }


// char = prompt('¿Que caractér quieres?', '*')
// while (char.length !== 1) {
//     char = prompt('introduce un solo caracter', '*')
    
// }
// alert(char)
// minimo = 0;
// maximo = 10

// function Random(min, max, char) {
//     random = Math.random()
//     console.log('min :' , min);//50
//     console.log('max : ' , max);//10

//     console.log('random: ' , random);
//     console.log('max - min + 1',(max - min + 1));
//     console.log(random * (max - min + 1));
//     console.log((max - min + 1) + min);
    
//     console.log(random * (max - min + 1) + min);
    
    
    
//     // 10 -50 = -40 +1 = -39 * .5 + 50
//     var numero = Math.floor( random * (max - min + 1) + min );
//     return numero
// }
// function name() {
//     name = 'hola mundo'
//     return 'adios mundo'
// }
// console.log(Random());
// console.log(name());

// for (var i = 0; i < 20; i++) {

//     console.log('salio el numero ' +  Random(50,10,0) + ' de una forma random')
    
// }

