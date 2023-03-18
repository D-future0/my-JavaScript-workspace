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
console.log('pi constant:RR ' + pi);


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
}
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

let names=[`ife`,`falzkid`,`victor`,`chizzy`]
let lastNames= [`okafor`,`ademola`,`hajiri`,`okoro`]

console.log(names.length);
console.log(names.indexOf(`chizzy`));
names.push(`ola`);
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);
names.unshift(`collins`);
console.log(names);
names.splice(1,1);
console.log(names);

// number guessing game
let number = window.prompt(`Guess a random number`);
let actualNumb = Math.ceil(Math.random(number)*6)

if (parseInt(number)===actualNumb) {
   console.log(`You win`)
}
else {
   console.log(`You lose. The actual number is ${actualNumb}`)
}


const siblingsName = [`Collins`, `Judith`, `Valentine`, `Stephen`, `Francis`, `Vivian`];
const surname = [`Okafor`];
let childrenName = [];

for (let i = 0; i < siblingsName.length; i++) {
     newName = siblingsName[i];
     const fullName = `${newName} ${surname}`;
   // console.log(newName)
    console.log(fullName)
   childrenName.push(fullName)
}

console.log(childrenName)


// project(monthly budget expense)
const food = [5000,4000,4500,5000];
const data = [1000,800,1000,600]

function calculateTotal(array) {
   let total = 0;
   for (let i = 0; i < array.length; i++) {
      const list = array[i]; 
      total+=list
   }
   return total;
}
const totalFood = calculateTotal(food);
const totalData = calculateTotal(data);
const display = {food:calculateTotal(food), data:calculateTotal(data)}

console.log(display)

if (totalFood > 19000 && totalData > 3500) {
   console.log(`You are spending way too much`)
}
else if (totalFood <= 19000 && totalData > 3500) {
   console.log(`You are spending way too much on data`)
} 
else if (totalFood > 19000 && totalData <= 3500) {
   console.log(`You are spending way too much on food`)
} 
else if (totalFood === 19000 && totalData === 3500) {
   console.log(`Well done, you meet your budget`)
} 
else {
   console.log(`Great! you spend below your budget`)   
}

// call back function

const username = `Mich`;

function greetMorning(username) {
   return `Good morning ${username}` 
};
function greetAfternoon(username) {
   return `Good afternoon ${username}`
};
function greetEvening(username) {
   return `Good evening ${username}`
};

function greet(cd) {
   console.log(`${cd}, My name is Leo and how can i help you`);
};

greet(greetAfternoon(username))

const username = `Mich`;

function greetMorning(name) {
   return `Good morning ${name}`
};
function greetAfternoon(name) {
   return `Good afternoon ${name}`
};
function greetEvening(name) {
   return `Good evening ${name}`
};

function greet(name, cb) {
   const myName = `Leo`
   console.log(`${cb(name)}, My name is ${myName} and how can i help you`);
};

greet(username, greetAfternoon)


// forEach method
 const ages = [23, 24, 25, 30];
 let sumOfAge = 0;
 function age(item) {
   console.log(item)
 }
 const list = ages.forEach(age)

for (let i = 0; i < ages.length; i++) {
   const age = ages[i];
   sumOfAge+=age
}
console.log(sumOfAge)


// map method
const studentDoc = [
   {name:`fawas`, class:`jss2`, age:15},
   {name:`ola`, class:`jss3`, age:17},
   {name:`sam`, class:`jss1`, age:13}
] 
// console.log(studentDoc)

const ages = studentDoc.map(function display(item) {
   return [{name:`ife`, class:`sss1`, age:17}]
})

// document.body.innerHTML = ages;
console.log(ages)

// filter,find and reduce method 
const hospitalPatient = [
   {name:`ola`, bloodGroup:`AA`, bill:350},
   {name:`cola`, bloodGroup:`AA`, bill:350},
   {name:`bola`, bloodGroup:`AS`, bill:250},
   {name:`shola`, bloodGroup:`AA`, bill:350},
   {name:`adeola`, bloodGroup:`AS`, bill:250},
   {name:`ademola`, bloodGroup:`SS`, bill:200},
   {name:`adeshola`, bloodGroup:`AS`, bill:250},
];

// const bloodGroups = hospitalPatient.filter(function filterBloodGroup(items) {
//    return items.bloodGroup === `AA`
// })
// console.log(bloodGroups);
// const search = hospitalPatient.find(function findhospitalPatient(params){
//    return params.bloodGroup ===`AS`
// });
// console.log(search)
const totalBills = hospitalPatient.reduce(function hospitalBills(acc,curritem){
   // console.log(acc)
   // console.log(curritem.bill)
   acc+=curritem.bill
   return  acc

}, 0);
console.log(`total bills: ${totalBills}`);

const months = [`January`, `Febuary`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
const days = [`Sunday`, `Monday`, `Tuesday`, `Wednessday`, `Thursday`, `Friday`,`Saturday`]

const date = new Date() 
const day = date.getDay()
const month = date.getMonth()
const year = date.getFullYear()

const myDate = (`${days[day]}, ${months[month]} ${date.getDate()} ${year}`);
console.log(myDate)
*/
// how to select elements in html using document.getElementById

// const myStyle = document.getElementById('firstId');
// myStyle.style.color = 'red';
// myStyle.style.fontFamily = 'Courier';

// document.getElementById('demo').style.backgroundColor = 'pink';

// how to select elements in by the tagname in html using document.getElementByTagName

// const myHeading = document.getElementsByTagName('h2');
// myHeading[1].style.color = 'green';

// const listOfBanks = document.getElementsByTagName('li');
// listOfBanks[1].style.color = 'purple';

// how to select elements by  in html using document.getElementByTagName
// const listOfBanks = document.getElementsByClassName(`olClass`);
// listOfBanks[0].style.color = `green`;
// listOfBanks[1].style.color = `pink`;
//  how to select elements in html using document.querySelector & document.querySelectorAll
// const myHeading = document.querySelector(`#firstId`);
// myHeading.style.color = `pink`;

// const listOfBanks = document.querySelectorAll(`.olClass`);
// listOfBanks.forEach(function list(banks) {
//    console.log(banks)
//    banks.style.color = `blue`;
// })

// firstElementChild, nextElementChild, lastElementChild & textContent
// const listOfBanks = document.querySelector(`#secondId`);
// listOfBanks.firstElementChild.nextElementSibling .style.color = `green`;
// listOfBanks.style.color = `purple`
// listOfBanks.lastElementChild.style.color = `blue`;
// const show = listOfBanks.textContent
// console.log(show)

//  getAttribute
//  const opay = document.querySelector(`.text`);
//  const classValue = opay.getAttribute(`class`)
//  console.log(classValue);
//  const wilmer = opay.nextElementSibling;
//  wilmer.setAttribute(`class`, `moon`);
//  wilmer.textContent = `i change wilmer bank to unity bank`;
//  console.log(wilmer)
 
// className & classlist
//  const first = document.getElementById(`c1`);
//  const second = document.getElementById(`c2`);
//  const third = document.getElementById(`c3`);
//  const forth = document.getElementById(`c4`);
//  second.className = `moon text`;
//  third.classList.add(`moon`);
//  forth.classList.add(`text`);
//  first.classList.remove(`text`)
// how to insert content in html using appendChild
// const newHeading = document.createElement(`h1`);
// const text = document.createTextNode(`I AM A NEW HEADING`);
// newHeading.appendChild(text);
// document.body.appendChild(newHeading);
// newHeading.classList.add(`text`, `moon`)
// console.log(newHeading);
// how to insert content in html using insertBefore
// const first = document.querySelector(`#firstId`);
// const newHeading = document.createElement(`h1`);
// const text = document.createTextNode(`I AM A NEW HEADING`);
// newHeading.appendChild(text);
// document.body.insertBefore(newHeading, first)
// newHeading.className = `moon text`
// console.log(first)
// how to insert content in html using prepend
// const newHeading = document.createElement(`h4`);
// newHeading.innerText = `DIFFERENT METHOD TO INSERT TEXT CONTENT`;
// document.body.prepend(newHeading);
// how to remove content in html using remove and removeChild
// const demo = document.querySelector(`#demo`);
// demo.remove()
// const bankList = document.getElementsByTagName(`li`);
// const fedelity = bankList[1].nextElementSibling;
// fedelity.remove()
// console.log(bankList)
//how to insert text in html using innerHtml and textContent
// const demo = document.querySelector(`#firstId `);
// const newElement = document.createElement(`ul`)
// newElement.innerHTML = `<li id="c1" class="text">Opay</li>
// <li id="c2">Wilmer</li>
// <li id="c3">Fedelity</li>
// <li id="c4" class="myClass">Access Diamond</li>`;
// document.body.insertBefore(newElement, demo)
// const bankList = document.getElementsByTagName(`li`);
// unity = bankList[3].textContent=`Unity`;
// console.log(unity)

// how to use addEventListener (click/mouseup/mousedown)
// const btn = document.getElementById(`btn`);
// btn.className=`pinky`;
// document.body.btn

// const demo = document.getElementById(`demo`);
// const first = document.getElementById(`firstId`);

// function ourClick() {
//    let demoClick=demo.classList.contains(`moon`);
//    let firstClick=first.classList.contains(`text`);
//    if (demoClick ) {
//       demo.classList.remove(`moon`);
//       first.classList.remove(`text`);
//    } else {
//       demo.classList.add(`moon`);
//       first.classList.add(`text`);
//    }
// }
// btn.addEventListener(`click`, ourClick)

// how to use addEventListener (mouseenter&mouseleave) and currentTarget
// const demo = document.getElementById(`demo`);
// demo.addEventListener(`mouseenter`, function(event){
//       event.currentTarget.classList.add(`moon`)
// })
// demo.addEventListener(`mouseleave`, function(){
//    demo.classList.remove(`moon`)
// })
// how to use addEventListener (mouseenter&mouseleave)
// const inputName = document.getElementById(`textName`);
// inputName.addEventListener(`keyup`, function(){
//    console.log(inputName.value)
// })

// const demo = document.getElementById(`demo`);
// demo.addEventListener()

// how to use currentTarget&target 
// const btns = document.querySelectorAll(`#btns`);
// btns.forEach(function(btns) {
// btns.addEventListener(`click`, function(e){
//    // e.currentTarget.style.background=`blue`
//    // console.log(btns)
//    e.target.style.background=`blue`
//    console.log(btns)
// })})

// const scrowUp=document.querySelector(`#link`);
// function stopScrew(e) {
//    e.preventDefault()
// }
// scrowUp.addEventListener(`click`, stopScrew)
// simple project
// const clickMe = document.getElementById('btn');

// function magic() {
//    const enterName = window.prompt(`What is your name ?`);
//    const newElement = document.createElement(`h3`);
//    newElement.innerHTML= `Hello ${enterName}, How are you doing today ?`;
//    document.body.prepend(newElement);
// }
// clickMe.addEventListener(`click`, magic)
 // how to get information from Form/to loacalstorage
 const form = document.querySelector(`#form`);
 const myName = document.querySelector(`#myName`);
 const myPassword = document.querySelector(`#password`);
 const submit = document.querySelector(`#submit`);

 form.addEventListener(`submit`, function(e) {
   e.preventDefault()
   console.log(myName.value);
   console.log(myPassword.value)
   localStorage.setItem(`name`, myName.value)
   localStorage.setItem(`password`, myPassword.value)
})
