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
/*
function add (x=0, y=0) {
    return x + y;
}

console.log(add());
console.log(add(10));
console.log(add(10,20));
*/
/////////////////////////////////////////////////////
//Objetos
/*
const user = {
    name: 'ryan',
    lastname: 'perez',
    age: 30,
    address: {
        country: 'colombia',
        city: 'bogota',
        street: 'main street 123'
    },
    friends: ['brandon', 'elena'],
    active: true,
    sendMail: function () {
        return 'sending email...'
    }
}

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail);
console.log(user.sendMail());
*/

/*
const user = {
    //Pares CLAVE-VALOR son PROPERTIES
    name: 'ryan',
    lastname: 'perez',
    age: 30,
    address: {
        country: 'colombia',
        city: 'bogota',
        street: 'main street 123'
    },
    friends: ['brandon', 'elena'],
    active: true,
    //Los que ejecutan funcion son METHODS
    //Otra forma de excribir el metodo
    sendMail () {
        return 'sending email...'
    }
}

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail);
console.log(user.sendMail());
*/

/////////////////////////////////////////////////////
//Shorthand property names
/*
const name = 'laptop';
const price = 3000;

const newProduct = {
    name: name,
    price: price
}

console.log(newProduct);
*/
/*
const name = 'laptop';
const price = 3000;

const newProduct = {
    name,
    price
}

console.log(newProduct);
*/
/////////////////////////////////////////////////////
//Manipulacion del DOM (se esta manipulando el documento)
/*
const title = document.createElement('h1');
title.innerText = 'Hola mundo desde JS';

const button = document.createElement('button');
button.innerText = 'click';
//Escucha --> EVENT HANDLERS
button.addEventListener('click', function () {
    //console.log('Hola mundo!');
    title.innerText = 'Texto actualizado con JS';
    alert('Se realizo un click');
});

document.body.append(title);
document.body.append(button);
// Todo esto se conoce como Manipulacion de DOM (se esta manipulando el documento)
// A partir de aqui podriamos crear nuestras propias bibliotecas o funcionalidades
// Pero si ya estamos reutilizando todas estas bibliotecas o funcionalidades:
// Estariamos creando nuestro propio Framework: React, Angular, ETC.
*/

/////////////////////////////////////////////////////
//Objetos como parametros
const user = {
    name: 'joe',
    age: 30
}

function printInfo(user) {
    return '<h1>Hola ' + user.name + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
//document.body.innerHTML = '<h2>Texto anadido</h2>';











