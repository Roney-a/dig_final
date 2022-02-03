'use strict'
// 1行目に記載している 'use strict' は削除しないでください
let i = 0;
const ppts = [
  "slides/slide1.jpeg",
  "slides/slide2.jpeg",
  "slides/slide3.jpeg",
  "slides/slide4.jpeg",
  "slides/slide5.jpeg",
  "slides/slide6.jpeg",
  "slides/slide7.jpeg",
  "slides/slide8.jpeg",
  "slides/slide9.jpeg",
  "slides/slide10.jpeg",
  "slides/slide11.jpeg",
  "slides/slide12.jpeg",
  "slides/slide13.jpeg",
  "slides/slide14.gif"
];

document.getElementById("back").innerText = "";

function trans(i){
  document.getElementById("slides").src  = ppts[i];
}

function push(){
  document.getElementById("back").innerText = " << Go Back ";
  i++;
  if(i >= ppts.length-1){
    i = ppts.length-1;
    document.getElementById("next").innerText = "End";
 }
  trans(i);
}

function pull(){
  document.getElementById("next").innerText = " Go Next >> ";
  i--;
  if(i <= 0){
    i = 0;
    document.getElementById("back").innerText = "";
 }
  trans(i);
}

const go = document.getElementById("next");
const back = document.getElementById("back");

go.addEventListener("click",() =>
    push()
    )
back.addEventListener("click",() =>
    pull()
    )
