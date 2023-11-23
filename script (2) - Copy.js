
const array = [];
function push() {
    let val = document.querySelector('.data').value;
    let max =document.querySelector('.size').value;
    document.querySelector('.data').value='';
    if(array.length<max){
    if (val!=''){
    array.push(val);}
    display = document.querySelector('#stackDisplay');
    let innerdata = '';
    for (let index = array.length-1; index >=0; index--) {
        const element = array[index];
        innerdata += `<p>${element}</p>`;
    }
    
    display.innerHTML = innerdata;}
    else if(max==0){
        displayPopup('Size Error!');

    }
else{
    displayPopup('Stack overflow');
}
}
function pop() {
    let arraysize =array.length;
    if(arraysize>0){
    array.pop();
    display = document.querySelector('#stackDisplay');
    let innerdata = '';
    for (let index = array.length-1; index >=0; index--) {
        const element = array[index];
        innerdata += `<p>${element}</p>`;
    }
    display.innerHTML = innerdata;}
else{
    displayPopup('Stack underflow');
}
}
function displayPopup(message) {
    document.querySelector('.message').innerText = message;
    open();
}

