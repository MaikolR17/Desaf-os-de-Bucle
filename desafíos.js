// Imprimir Impares del 1-20
for (var i = 1; i <= 20; i++){
    if (i % 2 == 1) {
        console.log(i)
    }
}

//Disminuir múltiplos de 3
for (var i = 100; i >= 0; i--){
    if (i % 3 == 0) {
        console.log(i)
    }
}

//Imprime la secuencia
for (var i = 4; i > -4; i-= 1.5){
    if (i >= -3.5) {
        console.log(i)
    }
}

//Sigma
var sum = 0
for (var i = 0; i <= 100; i++){
    if (i <= 100) {
        sum += i
    }
}
console.log(sum)

//Factorial
var product = 1
for (var i = 1; i <= 12; i++){
    if (i <= 12) {
        product *= i
    }
}
console.log(product)