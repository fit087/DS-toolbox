// Comentário de linha

/*
Comentário de bloco...
Tipagem dinamica
*/

// Variáveis
var username = "Adolf"
var age = 35
var aged_people = false
var total_value = 10.99
var array = ["orange", "apple", "foo", "bar"]


console.log("your name is", username, "and you are ", age, " years old.")
console.log("Array ", array)
console.log("size ", array.length)
console.log("usnm ", username.toUpperCase())
console.log("usnm ", username.toLowerCase())
console.log("usnm ", username.replace("Adolf", "Adolph"))


// Operadores
console.log("usnm ", age > 18)

// Condicional
if(age >= 18)
{
    console.log("Adult")
}
else if(age >= 12 && age < 18)
{
    console.log("Teenager")
}
else
{
    console.log("Underage")
}
// Loop
for(var i = 1; i <= 10; i++)
{
    if( i < 5){
        console.log(i)
    }
}
console.log(" ")
for(indice in array) // it's not the element Starts at 0
{
        console.log(indice)
        console.log(array[indice].toUpperCase())
}

// Funções

// 