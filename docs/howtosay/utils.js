function randomNum1To3(min, max) {
 var n = [];
 for(var i=0;i<3;i++){
 n.push(Math.floor(Math.random() * max) + min);
 }
 return n;
 }

 