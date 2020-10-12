let heading=document.createElement("h2");
let text=document.createTextNode("Mr David");
heading.appendChild(text);
console.log(heading);

let uList=document.createElement("ul");
let list=document.createElement("li");
let firstText=document.createTextNode("Jhon")
let firstUList=document.createElement("ul");
let secondList=document.createElement("li");
let secondText=document.createTextNode("Alex");
let secondUList=document.createElement("ul");
let thirdList=document.createElement("li");
let thirdText=document.createTextNode("Cendrella");
let thirdUList=document.createElement("ul");
uList.appendChild(list);
list.appendChild(firstText);
secondList.appendChild(secondText);
thirdList.appendChild(thirdText);
console.log(uList);

list.appendChild(firstUList);

let firstNList=document.createElement("li");
let list1stText=document.createTextNode("Ali");
firstUList.appendChild(firstNList);
firstNList.appendChild(list1stText);

let secondNList=document.createElement("li");
let list2ndText=document.createTextNode("Mohsin");
firstUList.appendChild(secondNList);
secondNList.appendChild(list2ndText);

let thirdNList=document.createElement("li");
let list3rdText=document.createTextNode("Alx");
firstUList.appendChild(thirdNList);
thirdNList.appendChild(list3rdText);

let fourthNList=document.createElement("li");
let list4thText=document.createTextNode("Tajwar");
firstUList.appendChild(fourthNList);
fourthNList.appendChild(list4thText);

uList.appendChild(secondList);
secondList.appendChild(secondUList);

let nestedFirst=document.createElement("li");
let TextFirst=document.createTextNode("Ayaz");
secondUList.appendChild(nestedFirst);
nestedFirst.appendChild(TextFirst);

let nestedSecond=document.createElement("li");
let TextSecond=document.createTextNode("Faizan");
secondUList.appendChild(nestedSecond);
nestedSecond.appendChild(TextSecond);

let nestedThird=document.createElement("li");
let TextThird=document.createTextNode("Kareem");
secondUList.appendChild(nestedThird);
nestedThird.appendChild(TextThird);

let nestedFourth=document.createElement("li");
let TextFourth=document.createTextNode("Sajjad");
secondUList.appendChild(nestedFourth);
nestedFourth.appendChild(TextFourth);

uList.appendChild(thirdList);
thirdList.appendChild(thirdUList);

let nestedListFirst=document.createElement("li");
let nestedTextFirst=document.createTextNode("Michelle");
thirdUList.appendChild(nestedListFirst);
nestedListFirst.appendChild(nestedTextFirst);

let nestedListSecond=document.createElement("li");
let nestedTextSecond=document.createTextNode("Sarah");
thirdUList.appendChild(nestedListSecond);
nestedListSecond.appendChild(nestedTextSecond);

let nestedListThird=document.createElement("li");
let nestedTextThird=document.createTextNode("shireen");
thirdUList.appendChild(nestedListThird);
nestedListThird.appendChild(nestedTextThird);

let nestedListFourth=document.createElement("li");
let nestedTextFourth=document.createTextNode("Sajjad");
thirdUList.appendChild(nestedListFourth);
nestedListFourth.appendChild(nestedTextFourth);