// Função - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions

var siglas = ['bh', 'sp', 'poa'];

console.log(siglas[0].toUpperCase());

function acertarSigla(sigla){
    var sigla_final = sigla.toUpperCase();
    return sigla_final;
}

console.log(acertarSigla(siglas[0]));
console.log(acertarSigla(siglas[1]));
console.log(acertarSigla(siglas[2]));

console.log(acertarSigla('bh-mg'));

// Objetos - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects


