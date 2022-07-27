function hello(){
    console.log('Funcao hello ')
}

//module.exports.hello = hello;
//module.exports = hello;

module.exports = {
    hello: hello
};