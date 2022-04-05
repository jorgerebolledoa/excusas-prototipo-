let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

console.log()
let random = Math.floor(Math.random() * (who.length - 0)) + 0;
let randoma = Math.floor(Math.random() * (action.length - 0)) + 0;
let randomwa = Math.floor(Math.random() * (what.length - 0)) + 0;
let randomwe = Math.floor(Math.random() * (when.length - 0)) + 0;
console.log(who[random] +" " + action[randoma] +" " + what[randomwa] +" " + when[randomwe])