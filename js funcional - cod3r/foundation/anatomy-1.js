//function declaration 

function sayHello(){
    console.log("Hello");
}

sayHello()

function sayHelloTo(name){
    console.log("Hello " + name);
}

sayHelloTo('Alice')

function returnHi(){
    return "Hi!"
}

const greeting = returnHi();
console.log(greeting)

function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo("Alice"))