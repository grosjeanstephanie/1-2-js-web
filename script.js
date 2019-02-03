
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

let plusBut = document.getElementById('plusButton');
let subBut = document.getElementById('subButton');
let multiBut = document.getElementById('multiButton');
let divBut = document.getElementById('divButton');

plusBut.addEventListener('click', ()=>{
  let vari = parseInt(document.getElementById("numb").value);
  let vari1 = parseInt(document.getElementById("numb1").value);
  document.getElementById("result").innerHTML = vari + vari1;
});
subBut.addEventListener('click', ()=>{
  let vari = document.getElementById("numb").value;
  let vari1 = document.getElementById("numb1").value;
  document.getElementById("result").innerHTML = vari - vari1;
});
multiBut.addEventListener('click', ()=>{
  let vari = document.getElementById("numb").value;
  let vari1 = document.getElementById("numb1").value;
  document.getElementById("result").innerHTML = vari * vari1;
});
divBut.addEventListener('click', ()=>{
  let vari = document.getElementById("numb").value;
  let vari1 = document.getElementById("numb1").value;
  document.getElementById("result").innerHTML = vari / vari1;
});
