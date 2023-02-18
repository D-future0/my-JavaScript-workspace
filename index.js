/* How to display code in you wed browser
document.write('Document.write ');
window.prompt('window.prompth');
window.alert('window.alert');
console.log('console.log');

/* Muti-line 
comment*/

/*const pi = 3.14;
let firstName;
var lastName;
firstName = 'collins';
lastName = 'okafor';
fullName = firstName + ' ' + lastName


document.write(fullName);
window.prompt(fullName);
window.alert(fullName);
console.log(fullName);
console.log('pi constant: ' + pi);


var lenght 
lenght = window.prompt();
let result = parseInt(lenght)


function calculate() {
   console.log( result * 2.14)
}

calculate(); 

// arrey
let groceryList = ['egg','fresh fish','noodles','bread'];
let returnItem = groceryList[0] +' '+ groceryList[1];
console.log(groceryList)
console.log(returnItem) 

// function
function calculate() {
   return Math.pow(parseInt(radius), 2) * pi;
}

const pi = 3.14;
let radius = window.prompt("input radius");
let area =  calculate(radius,pi); 

console.log('area of the circle: '+ area);

//alternative metthod
const pi = 3.14;
let radius = window.prompt("input radius");
let area =  (radius,pi) => Math.pow(parseInt(radius), 2) * pi;
let result = area(radius,pi);
console.log('area of the circle: '+ result);

//object: contain many value

const phone = {name:'name: Iphone X', operatingSystem:'operating System: IOS',color:'color: grey',
greetings(){
   console.log('is rated as one of the most selling device in the market');
}
};
let device='the phone '
console.log(device + phone.greetings());
// universal date and time
const nigeriaTime = Date ();

console.log(nigeriaTime)

const age = 34;
if (age >= 1 && age < 13 ) {
   console.log('you are a kid')
}
else if (age >= 13 && age < 18 ) {
   console.log('you are a teenager')
}
else if (age >= 18 && age < 35 ) {
   console.log('you are a aldult')
}
else if (age >= 35 && age <= 100 ) {
   console.log('you are a elder')
}
else {
   console.log('put in a valid age')
}
// while loop
let countDown = 20;

while (countDown > 0) {
   console.log("number "+ countDown);
   countDown-=2;
}
// do while loop 
let countup = 0;
do{
   console.log("number "+ countup);
   countup++;
}
while(countup<=10)

// for loop
for (let countDown = 100; countDown >= 0; countDown-=20) {
   console.log("number "+ countDown);
}*/ 
// properties and methods 
let yourName=' okafor collins';

let fullName= yourName.length;
// let firstName= yourName.slice((yourName.charAt(yourName.length -1)), (yourName.indexOf(' ', 1)))
let nameValue= yourName.trim()
let firstName= nameValue.slice(0, nameValue.indexOf(' '))

console.log(fullName);
console.log(yourName.toUpperCase());
console.log(yourName.toLowerCase());
console.log(yourName.toUpperCase());
console.log(yourName.trim());
console.log(yourName.charAt(6));
console.log(yourName.indexOf('n'));
console.log(yourName.charAt(yourName.length -1));
console.log(firstName); 