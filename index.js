
function hello(){
    /*
    return 'Hola Mundo';
    return 20;
    return 20.3;
    return true;
    return [1,2,3];
    return {name: 'daniel'}
    */

    // Functional Programming
    // Funci'on que retorna otra funcion --> En React se usa mucho para los COMPONENTES.
    return function () {
        return 'hola mundo';
    }

}
/*
const result = hello();
console.log(result);
*/
//console.log(hello());
console.log(hello()());





