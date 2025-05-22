var a = 10;
var b = 20;

console.log(a)
console.log(b)

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a >> b)
console.log(a << b)
console.log(a == b)
console.log(a != b)
console.log(a !== b)


function add(a, b) {
    // var a=10;
    // var b=30;
    console.log(a + b)
}
add()
function add(a, b) {

    console.log(a + b)

}
add(20, 30)
add(50, 30)
add(10, 30)
var a = 10
var b = 20
console.log(`${a}%${b}=${a % b}`)

n = 10
if (n % 2 == 10) {
    console.log("even")
}
else {
    console.log("odd")
}

n = 1;
for (let n = 1; n <= 10; n++) {
    if (n % 2 == 0) {
        console.log(`${n} is even`)
    }
    else {
        console.log(`${n} is odd`)
    }

}

n = 1;
while (n <= 10) {
    if (n % 2 == 0) {
        console.log(`${n} is even`)
    }
    else {
        console.log(`${n} is odd`)
    }
    n++;
}

n = 1;
do {
    if (n % 2 == 0) {
        console.log(`${n} is even`)
    }
    else {
        console.log(`${n} is odd`)
    }
    n++;
} while (n <= 10);

n = 3
switch (n) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Enter the valid number")
        break;
}

const sum = () => {
      console.log(10+20)
}
sum()

var element = document.createElement("div")
element.setAttribute("class","main")
element.innerText = "this is element for dom"

document.body.append(element);


n=10
var result = (n%2===0)? "even" : "odd"
console.log(result)

//Array
var arr = [10, 20, 30, 40, 50, 60]

for( var index in arr){
    console.log(index)
}
for( var key of arr){
    console.log(key)
}

//Object
var obj = {name : "kavitha", dept : "maths"}

for( var key in obj){
    console.log(key)
    console.log(obj [key])
}

//Spread Operator
var arr =[1, 2, 3, 4, 5]

var arr2 =[...arr, 6, 7, 8]
console.log(arr2)

//Destructuring Operator
var marks = [90, 99, 97, 98, "fail"]

var [m1,m2,m3,m4,m5] = marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)

//callback function
function sayBye(){
    console.log("bye")
}
function demo(name, callback){
    console.log("hello " + name)
    callback()
}
demo("kavitha", sayBye);

const btn=document.getElementById("btn");

btn.onclick = function(){
    window.open("https://www.instagram.com")
    alert("welcome to instagram")
}
