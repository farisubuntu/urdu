window.onload=cellHasArabic();

var state = 0; // hidden
var arabicFields = document.getElementsByClassName("arabic");
var urduFields = document.getElementsByClassName('urdu');

function showArabic() {
  // console.log("showArabic");
  //   change this button text into 'HideArabic'
  if (state === 0) {
    for (let i = 0; i < arabicFields.length; i++) {
      arabicFields[i].style.visibility = "visible";
    }
    state = 1;
    document.getElementById('btnShowArabic').innerText="Hide Arabic";
  } else {
    for (let i = 0; i < arabicFields.length; i++) {
      arabicFields[i].style.visibility = "hidden";
    }
    state = 0;
    document.getElementById('btnShowArabic').innerText="Show Arabic";
  }
}
function showUrdu(){
 if(state===1){
  state=0;
  showArabic();
  for(let i=0;i<urduFields.length;i++){
   urduFields[i].style.visibility="visible";
  }
  document.getElementById('btnShowUrdu').innerText="Hide Urdu";
 }
  else{
   state=1;
   showArabic();
   for(let i=0;i<urduFields.length;i++){
    urduFields[i].style.visibility="hidden";
   }
   
   document.getElementById('btnShowUrdu').innerText="Show Urdu";

  }
 }

function cellHasArabic(){
 var rowWithArabic=document.querySelectorAll('#table1 .rTableCell.arabic');
 for(var i=0;i<rowWithArabic.length;i++){
  if(rowWithArabic[i].innerText.length>1){
    rowWithArabic[i].parentElement.style.backgroundColor='yellow';
  }
}
}
