




let siteaddress="https://farisubuntu.github.io/urdu";
let gtranslate_address="https://translate.google.com/?sl=en&tl=ar&op=websites";
let trylink="https://farisubuntu-github-io.translate.goog/urdu/?_x_tr_sl=en&_x_tr_tl=ar&_x_tr_hl=en&_x_tr_pto=wapp";


function translateFunc(){
 navigator.clipboard.writeText(siteaddress);
 window.location.href=gtranslate_address;
 // window.location.href=trylink;
 // console.log('translateFunc() invoked...');
}

