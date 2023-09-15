onload = function () {
 console.log('script.js loaded');
}
var container = document.getElementById('container');
var phCount = phrases.length;

function readPhrases() {
 console.log('readPhrases() ....');
 var out = "";
 var i = 0;

 for (i; i < phCount; i++) {
  out += '<div class="row">\
  <div class="urdu"> '+ phrases[i].urdu + '</div>\
  <div class="arb">'+ phrases[i].arb + '</div></div>';
 }
container.innerHTML=out;

}

function createCard(args){
 container.innerHTML="";
 container.innerHTML+="<h1> Review </h1> <hr>";
 

}