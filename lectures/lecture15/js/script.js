const mins = document.querySelectorAll(".mins");
const plus = document.querySelectorAll(".plus");

console.log(mins , plus);

//selector . event = action
mins.forEach(function(btn) {
    btn.onclick = function(){
        if (btn.nextElementSibling.value <= 0)  {
            btn.nextElementSibling.value = 1;
        }else{
            btn.nextElementSibling.value -=1 ;
        } 
        
    }
});

plus.forEach(function(btn) {
    btn.onclick = function(){
    btn.previousElementSibling.value = parseInt(btn.previousElementSibling.value) +1 ;  
    }
});