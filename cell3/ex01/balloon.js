"use strict";

const ballon=document.querySelector(".js_balloon");
const intro = document.getElementById('intro');
let widthBalloon = 200;
 let heightBalloon =200;
function changecolor() {
 let color ='#FF0000';
 intro.style.width = `${widthBalloon+40}px`;
 intro.style.height = `${heightBalloon+40}px`;
   if(widthBalloon === 420 && heightBalloon===420){
      widthBalloon = 200;
      heightBalloon = 200;
   }else if(widthBalloon >=200 && heightBalloon>=200){
      widthBalloon = widthBalloon +10;
      heightBalloon = heightBalloon +10;
   }


  if(ballon.classList.contains("colorRed")){
      ballon.classList.remove("colorRed");
      ballon.classList.add("colorGreen")
    }else if(ballon.classList.contains("colorGreen")){
      ballon.classList.remove("colorGreen");
      ballon.classList.add("colorBlue")
    }else if(ballon.classList.contains("colorBlue")){
      ballon.classList.remove("colorBlue");
      ballon.classList.add("colorRed")
     }

}

ballon.addEventListener("click", changecolor);

ballon.addEventListener("mouse", changecolor);