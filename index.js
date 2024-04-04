/*
function hello(){
    
    //return 'Hola Mundo';
    //return 20;
    //return 20.3;
    //return true;
    //return [1,2,3];
    //return {name: 'daniel'}
    

    // Functional Programming
    // Funci'on que retorna otra funcion --> En React se usa mucho para los COMPONENTES.
    return function () {
        return 'hola mundo';
    }

}

//const result = hello();
//console.log(result);

//console.log(hello());
console.log(hello()());
*/

/////////////////////////////////////////////////////
/*
function hello(name){
    return 'Hola ' + name;
}

console.log(hello('Daniel'));
console.log(hello('Jes'));
console.log(hello('Eli'));
*/
/*
function add (x, y) {
    return x + y;
}

console.log(add(10, 20));
*/
/////////////////////////////////////////////////////
//Parametros por defecto
function add (x=0, y=0) {
    return x + y;
}

console.log(add());
console.log(add(10));
console.log(add(10,20));














