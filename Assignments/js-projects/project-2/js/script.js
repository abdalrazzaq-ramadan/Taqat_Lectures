let textArea = document.querySelector('textarea')
let textLength = document.querySelector('span')
let headText = document.querySelector('h1')
console.log(textArea , textLength);


textArea.oninput = ()=>{
    textLength.innerText = textArea.value.length; 
    if(textArea.value.length >= 50){
        textArea.style.borderColor = 'red';
        textLength.style.color = 'red';
        headText.innerText = 'stop typing !!!';
    }else{
        textArea.style.borderColor = 'black';
        headText.innerText = 'Type here!'
        textLength.style.color = 'black';
    }
}
