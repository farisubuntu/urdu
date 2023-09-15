onload = function () {
 console.log('script.js loaded');
}
var container = document.getElementById('container');
var phCount = phrases.length;
var curPhrase = 0;
var Options=[];
function readPhrases() {
 console.log('readPhrases() ....');
 var out = "";
 var i = 0;

 for (i; i < phCount; i++) {
  out += '<div class="row">\
  <div class="urdu"> '+ phrases[i].urdu + '</div>\
  <div class="arb">'+ phrases[i].arb + '</div></div>';
 }
 container.innerHTML = out;

}

function createQuestion() {
 var i = 0;
 
 var randNums = random3Nums(0, phCount);
 console.log(randNums);
  Options[0] = phrases[randNums[0]].arb;
  Options[1] = phrases[randNums[1]].arb;
  Options[2] = phrases[randNums[2]].arb;


 
 buildCard(Options);
}

function buildCard(Options) {

 var correctAnswer = phrases[curPhrase].arb;
 Options.push(correctAnswer);
 var o=shuffle(Options);
 container.innerHTML = "";

 

 var out=`
 <div class="rendered-form">
    <div class="formbuilder-radio-group form-group field-question">
        <label for="question" class="formbuilder-radio-group-label">${phrases[curPhrase].urdu}</label>
        <div class="radio-group">
            <div class="formbuilder-radio">
                <input name="question" access="false" id="question-0" value="option-1" type="radio">
                <label for="question-0">${o[0]}</label>
            </div>
            <div class="formbuilder-radio">
                <input name="question" access="false" id="question-1" value="option-2" type="radio">
                <label for="question-1">${o[1]}</label>
            </div>
            <div class="formbuilder-radio">
                <input name="question" access="false" id="question-2" value="option-3" type="radio">
                <label for="question-2">${o[2]}</label>
            </div>
            <div class="formbuilder-radio">
                <input name="question" access="false" id="question-3" value="option-3" type="radio">
                <label for="question-3">${o[3]}</label>
            </div>
        </div>
    </div>
</div>
<button id="next" onclick="nextClicked();">Next</button>

`

container.innerHTML+=out;


 
}

function startReview(){
createQuestion();
}

function nextClicked(){
 console.log('clicked');
}