'use strict'
// 1行目に記載している 'use strict' は削除しないでください
let i = 0;
const ppts = [
  "./DIG_プレゼン/スライド1.jpeg",
  "./DIG_プレゼン/スライド2.jpeg",
  "./DIG_プレゼン/スライド3.jpeg",
  "./DIG_プレゼン/スライド4.jpeg",
  "./DIG_プレゼン/スライド5.jpeg",
  "./DIG_プレゼン/スライド6.jpeg",
  "./DIG_プレゼン/スライド7.jpeg",
  "./DIG_プレゼン/スライド8.jpeg",
  "./DIG_プレゼン/スライド9.jpeg",
  "./DIG_プレゼン/スライド10.jpeg",
  "./DIG_プレゼン/スライド11.jpeg",
  "./DIG_プレゼン/スライド12.jpeg",
  "./DIG_プレゼン/スライド13.jpeg",
  "./DIG_プレゼン/スライド14.gif"
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
