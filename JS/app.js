const helpers = require('./helpers'); //importa,mos la funcion mediante la constante helpers, y ponemos require y le damos la ubcacion donde tenemos la funcion.

const http= require('http');


const server = http.createServer((req, res)=>{
    res.end("Hola mundo desde el server!!!!!.");
});
    server.listen(3000);

/*  function sum(a, b) {
    return a+b;   //Funcion de suma que devuelve una suma.
}
 */
const total = helpers.sum(10, 200)  //declaramos que lso valores de la funcion suma tendra estos dos valores.

console.log("EL total es: ",total);  //usamos esto para probar en consola 
