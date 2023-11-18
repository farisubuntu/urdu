console.log('script.js invoked....');

function main() {
 removeAllInlineStyles();
 addTableClasses();
 modifyFirstCols();
}

function removeAllInlineStyles() {
 // remove all inline style attributes
 var allPartElements = document.querySelectorAll('.part-wrapper *');
 allPartElements.forEach(function name(e) {
  e.removeAttribute('style');
 });
}

function changeAllDirRtl() {
 // change classes dir-rtl
 var rtls = document.querySelectorAll('.dir-rtl');
 rtls.forEach(function name(e) {
  e.className = "rtl no-translate";
 });
}

function addTableClasses() {
 // add  'w3-table-all  notranslate'  to all tables
 var tables = document.querySelectorAll('table').forEach(function name(e) {
  e.className += " w3-table-all notranslate";
 });
}
function modifyFirstCols() {
 var firstColOfTables = document.querySelectorAll('table tbody tr td:nth-child(1)');
 firstColOfTables.forEach(function name(e) {
  e.style.border = "1px solid blue";
  e.setAttribute('class', 'translate');
  // e.style.classList.add("translte");
 });
}
function removeNoTranslate() {
 var tables = document.querySelectorAll('table').forEach(function name(e) {
  e.className += " w3-table-all translate";
 });

}
function addSpecialTags() {
 // document.querySelectorAll('tbody.c-2 td:nth-child(2)').forEach(function name(e) {
 //  e.className = "translate";
 // });
 document.querySelectorAll('td').forEach(function name(e){
e.className = "translate";
 });
 document.querySelectorAll('[dir="rtl"]').forEach(function name(e) {
  e.className+="notranslate";
});
}
