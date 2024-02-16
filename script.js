// -------------08/02/2024------------------------

// console.log("Hello World");

// window.alert('This is an alert');

// NOÇÕES BÁSICAS DE JS --------------------------------
// window.alert("OKOK");

// document.getElementById("myh1").textContent = "Hello World";

// document.getElementById("myP").textContent = "Hi, Maria";

// document.getElementById("myh1").textContent = "hi, tom";

// document.getElementById("myh1").style.color = "red";

// document.getElementById("myP").style.backgroundColor = "blue";

// document.getElementById("myh1").style.display = "inline-block"

// document.getElementById("myP").style.display = "block"

// document.getElementById("myh1").style.backgroundColor = "yellow";

// document.getElementById("myh1").style.textAlign = "right";

// ------------------------------------------------------------

// let x=100;  (DECLARAÇÃO DE VARIAVEL)

// let x;

// x = 200; (ATRIBUIÇÃO DE  VALOR)
// let age = 30;
// let value = 40.99;
// let nome = "maria";
// let city = "João Pessoa";

// console.log(`You are ${age} years old!`);
// console.log(`You have $${value} dollars!`);
// console.log(`Her name is ${nome} and she lives in ${city}`);
// console.log(typeof age);
// console.log(typeof value);
// console.log(typeof nome);
// console.log(typeof city);

// document.getElementById("myh1").style.color = "blue";

// document.getElementById("myP").style.backgroundColor = "green";

// document.getElementById("myh1").textContent = "VARUS";

// document.getElementById("myh1").style.backgroundColor = "pink";

// window.alert("flashback");

// ------------------11/02/2024------------------------
// let x = 100;

// x = 200;
// console.log(x);

// function sayMyName(nome){
//     console.log('My name is ' + nome)
// }

// sayMyName('maria');

// function somar(x, y){
//     return x + y
// }

// console.log(somar(10, 20));

// let age = 30;

// let city = "Lisboa";

// let money = 40;

// console.log(`You are ${age} years old!`);
// console.log(`You live in ${city}!`);
// console.log(`You have ${money} dollars`);

// let nome = false;

// console.log(`Marcus is online: ${nome}`);

// let FullName = "Marcus Vinícius";

// let City = "João Pessoa";

// let car = true;

// document.getElementById("p1").textContent = `My name is ${FullName}`;
// document.getElementById("p2").textContent = `I live in ${City}`;
// document.getElementById("p3").textContent = `I have a car: ${car} `;

// ----------OPERADORES ARITMÉTICOS 12/02/24--------------------

// let students = 30;

// students = students + 1;
// //or students += 1; or students++;

// students = students - 1;
// //or students -= 1; or students--;

// students = students * 2;
// //or students *= 2; or

// students = students / 2;
// //or students /= 2;

// students = students ** 2; //(students elevado a 2)
// //or students **= 2;

// console.log(students);

// -----------------OPERADORES DE PRECEDÊNCIA-----------------

// 1. Parênteses ()
// 2. Expoentes
// 3. Multiplicação , Divisão e Módulo
// 4. Adição e Subtração

// let result = 1 + 2 * 3 + 4 ** 2;

// console.log(result)

// -----------Maneira fácil de fazer um User Input---13/02/2024-----------
// let username = window.prompt("What's your name?");

// console.log("Welcome, " + username);

// let user = window.prompt("What´s your name?");
// let city = window.prompt("Where do you live?");

// document.getElementById("myh1").textContent = "Nice to meet you, " + user + "!";

// document.getElementById("myP").textContent =  city + " is a great place to live!";

// alert("Welcome, " + user + ", nice to meet you!");

// alert("You are " + age + " years old!");

// let user;

// document.getElementById("myBtn").onclick = function () {
//   user = document.getElementById("myText").value;
//   console.log("Nice to meet you, " + user + "!");
// };

// ----------------------Maneira mais avançada para se utilizar o User Input---------------------
// let username;

// document.getElementById("myButton").onclick = function () {
//   username = document.getElementById("myInput").value;
//     document.getElementById("myh1").textContent = "Welcome," + username
// };

// -----------------Type conversion----------------13/02/2024

// let age = window.prompt("How old are you?");

// age = Number(age); //converte para number

// age += 4;
// console.log(age, typeof age);

// ----------------------16/02/2024-----------------
// alert("Hello");

// var nome = window.prompt("What's your name?");
// document.getElementById("MYh1").textContent = `My name is ${nome}`;

// var age = window.prompt("How old are you?");

// document.getElementById("age").textContent = `I am  ${age}`;

// var place = window.prompt("Where do you live?");

// document.getElementById("place").textContent = `I live in  ${place}`;


let username;


document.getElementById("myBtn").onclick = function(){
username = document.getElementById("myInput").value
    alert("Welcome, " + username);
}
