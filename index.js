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
/*
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
*/
/////////////////////////////////////////////////////
//Destructuring
/*
const user = {
    name: 'joe',
    age: 30
}

function printInfo(user) {
    return '<h1>Hola ' + user['age'] + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
*/

/*
// Aplicando Destructuring --> name
const user = {
    name: 'joe',
    age: 30
}

function printInfo({ name }) {
    return '<h1>Hola ' + name + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
*/

/*
// Aplicando Destructuring --> age
const user = {
    name: 'joe',
    age: 30
}

function printInfo({ age }) {
    return '<h1>Hola ' + age + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
*/

// Aplicando Destructuring de otra forma
/*
const user = {
    name: 'joe',
    age: 30
}

function printInfo(user) {
    const { name, age } = user; 
    console.log(name, age);
    return '<h1>Hola ' + name + " | " + age + '</h1>';
}

console.log(printInfo(user));
document.body.innerHTML = printInfo(user);
*/
/////////////////////////////////////////////////////
//Funciones an'onimas
/*
function start () {
    return 'Starting...';
}

console.log(start());
*/

//En JS las funciones no necesariamente deben tener nombre
// ponemos la funcion dentro del console log
// y al final agregamos parentesis, 
// de esta forma, estamos definiendo e invocando
// a la funci'on.
/*
console.log(function start () {
    return 'Starting...';
}());
*/

//Pero si estamos utilizando la funci'on directamente,
//podemos quitarle el nombre, lo que la vuelve una fn anonima
/*
console.log(function () {
    return 'Starting...';
}());
*/

//Ejemplo aplicado al DOM
/*
const button = document.createElement('button');
button.innerText = 'click me';

button.addEventListener('click', function () {
    alert('clicked');
});

document.body.append(button);
*/
/////////////////////////////////////////////////////
// Arrow Function

// fn normal
/*
function add(x,y) {
    return x + y;
};
*/
/*
// arrow function
const add = (x,y) => {
    return x + y;
};


//Ejemplo aplicado al DOM
const button = document.createElement('button');
button.innerText = 'click me';

button.addEventListener('click', () => {
    alert('clicked');
});

document.body.append(button);
*/


/////////////////////////////////////////////////////
//Inline arrow functions

/*
const showText = () => {
    return 'Hola mundo';
};

console.log(showText());
*/
/*
// Si no colocamos llaves {}, implicitamente es un RETURN
const showText = () => 'Hola mundo';
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3];
// Para retornar un objeto --> tenemos que envolver el objeto dentro de parentesis
// porque JS, lo interpretaria como las llaves de la fn
const showObject = () => ({name:'ryan'});


console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());
*/

/////////////////////////////////////////////////////
// Otra funcionalidad del return
// Detener la ejecucion del Codigo hasta donde aparece
//Ejemplo aplicado al DOM
/*
const button = document.createElement('button');
button.innerText = 'click me';

const isAuthorized = true;

button.addEventListener('click', function () {
    if (isAuthorized) {
        return alert('esta autorizado');
    }
    alert("no esta autorizado");
});

document.body.append(button);
*/

/////////////////////////////////////////////////////
// Strings literals
/*
Nos permiten concatenar o unir strings y nos permiten
interpretar valores
*/

//Ejemplo aplicado al DOM
/*
const background = 'red';
const color = 'white';
const isAuthorized = true;

const button = document.createElement('button');
button.innerText = 'click me';
button.style = 'background: #202020 ; color: white;';
button.style = `background: ${isAuthorized ? 'green' : background} ; color: ${color};`;


button.addEventListener('click', function () {
    if (isAuthorized) {
        return alert('esta autorizado');
    }
    alert("no esta autorizado");
});

document.body.append(button);
*/

/////////////////////////////////////////////////////
// Metodos de Arrays

const names = ['ryan', 'joe', 'maria'];
const newNamess = ['marcos', 'mario', 'john'];
//-------------------------------------------------
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element);
// };
//-------------------------------------------------
// FOREACH
// names.forEach(function (name) {
//     console.log(name);
// });
//-------------------------------------------------
// MAP
// names.map(function (name) {
//     console.log(name);
// });

// const newNames = names.map(function (name) {
//     return name;
// });
// console.log(newNames);

// const newNames = names.map(function (name) {
//     return `Hola ${name}`;
// });
// console.log(names);
// console.log(newNames);
//-------------------------------------------------
// Find
// const nameFound = names.find(function (name) {
//     if (name === 'joe') {
//         return name;
//     }
// });
// console.log(nameFound);
//-------------------------------------------------
// Filter: Devuelve un arreglo
// const nameFiltered = names.filter(function (name) {
//     if (name !== 'joe') {
//         return name;
//     }
// });
// console.log(nameFiltered);
//-------------------------------------------------
// Concat
console.log(names);
console.log(newNamess);
console.log(names.concat(newNamess));
