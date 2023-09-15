function random3Nums(min, max) {
 var nums=[];
 min = Math.ceil(min);
 max = Math.floor(max);
 nums.push(Math.floor(Math.random() * (max - min) + min)); // The maximum is exclusive and the minimum is inclusive
 nums.push(Math.floor(Math.random() * (max - min) + min));
 nums.push(Math.floor(Math.random() * (max - min) + min));

 return nums;
}
function random1Num(min,max){
 min=Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min));
}

function shuffle(array) {
 let currentIndex = array.length,  randomIndex;

 // While there remain elements to shuffle.
 while (currentIndex > 0) {

   // Pick a remaining element.
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex--;

   // And swap it with the current element.
   [array[currentIndex], array[randomIndex]] = [
     array[randomIndex], array[currentIndex]];
 }

 return array;
}
