var baseNode = document.getElementById('base');
var rawSymbol = document.getElementById('symbol');
var rawColor = document.getElementById('color');
var pyramid = document.getElementById('piramide');

var base, symbol, color;

var rawLine = document.getElementsByClassName('line');

getBase = function() {
    base = baseNode.value
}
getSymbol = function(){
    symbol = rawSymbol.value
}
getColor = () => {
    return rawColor.value
}

baseNode.addEventListener('keyup', getBase)

createPyramid = () => {
    linea = '';
    pyramid.innerHTML = linea;
    getSymbol()
    color = rawColor.value;

    for (var i = 0; i < base; i++) {
        pyramid.innerHTML += '<p class="line">' + (linea +=  ('<span class="symbols">' +  symbol + '</span>')) + '</p>';
    }
    for (var i = 0; i < rawLine.length; i++) {
        rawLine[i].style.color = color
    }
    
}




// for (var i = 0; i < base; i++) {
    //         result.innerHTML += '<p class="line">' + (string +=  ('<span class="symbols">' +  symbol + '</span>')) + '</p>';
    //     }
    //     for (var i = 0; i < rawLine.length; i++) {
    //         rawLine[i].style.color = color
    //     }











































// var rawBase = document.getElementById('base');
// var rawSymbol = document.getElementById('symbol');
// var rawColor = document.getElementById('color');
// var result = document.getElementById('piramide')
// var rawLine = document.getElementsByClassName('line');
// var base, symbol, color;

// getBase = function() {
//     base = rawBase.value;
// }

// getSymbol = function() {
//     symbol = rawSymbol.value;
// }
// // getColor = function() {
// //     console.log(rawColor.attributes);
    
// //     color = rawColor.value;
// // }

// rawBase.addEventListener('keyup', getBase)
// rawSymbol.addEventListener('keyup', getSymbol)
// // rawColor.addEventListener('keyup', getColor)

// createPyramid = function() {
//     string = '';
//     result.innerHTML = string;
//     color = rawColor.value;

//     for (var i = 0; i < base; i++) {
//         result.innerHTML += '<p class="line">' + (string +=  ('<span class="symbols">' +  symbol + '</span>')) + '</p>';
//     }
//     for (var i = 0; i < rawLine.length; i++) {
//         rawLine[i].style.color = color
//     }
// }