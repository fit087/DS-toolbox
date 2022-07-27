// Função - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions

var siglas = ['bh', 'sp', 'poa'];

console.log(siglas[0].toUpperCase());

function acertarSigla(sigla){
    var sigla_final = sigla.toUpperCase().split('-')[0];
    return sigla_final;
}

console.log(acertarSigla(siglas[0]));
console.log(acertarSigla(siglas[1]));
console.log(acertarSigla(siglas[2]));

console.log(acertarSigla('bh-mg'));

// Callback?
// Funcao anonima
// execucao com delay

setTimeout(function(){
    console.log("Atrasado ...");
}, 5000)



// Objetos - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects


var pessoa = {
    "nome": "Marcelo Sabadini",
    "idade": 37,
    "instrumentos": ["Guitarra", "Bateria"],
    "filhos": [
        {
            "nome": "Giovana",
            "idade": 6
        },
        {
            "nome": "Israel",
            "idade": 8
        }
    ]
}
console.log(typeof(pessoa))

console.log(pessoa)