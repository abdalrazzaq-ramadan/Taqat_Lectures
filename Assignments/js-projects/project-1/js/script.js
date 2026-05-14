let counter = document.querySelector('.counter');
let text = document.querySelector('.text');
const pres_btn = document.querySelector('.pres');
const res_btn = document.querySelector('.res');

console.log(counter , text , pres_btn , res_btn);



pres_btn.onclick = ()=>{
    counter.value ++;
    if(counter.value <= 33 ){
            text.innerText = 'سبحان الله';
        }else if(counter.value <= 66){
            text.innerText = 'الحمد لله';
        }else{
            text.innerText = 'الله أكبر' ;
    }
}

pres_btn.nextElementSibling.onclick = ()=>{
        counter.value = 0;
        text.innerText = 'سبحان الله';
    }
