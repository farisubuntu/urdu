var tables=document.querySelectorAll('table');
var div_wrapper=document.createElement('div');
div_wrapper.setAttribute('class','table-container');
var section_element=document.createElement('section');
section_element.setAttribute('class','chapter-sec');

function getTables(){
for(var i=0;i<tables.length;i++){
  div_wrapper.innerHTML=tables[i].outerHTML;
  section_element.innerHTML+=div_wrapper.outerHTML;
}
return section_element;
}
/*
document.body.innerHTML=getTables().innerHTML;

*/
