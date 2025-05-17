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


