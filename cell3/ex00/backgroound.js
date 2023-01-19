"use strict";

const btn=document.querySelector(".btn");

const background=document.querySelector(".background");
function getRandomArbitrary() {
    let simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(let i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
   
    document.body.style.background = color;
    return color
  }

function changecolor() {
    console.log('maricarmen');
 
    console.log(getRandomArbitrary());
}

btn.addEventListener("click", changecolor);

