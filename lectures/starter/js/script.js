document.oncopy = function () {
    return false;
}

// document . onselectstart = function(){
//     alert("");
//     return  false;
// }

// let name = prompt("Enter your name : ");
// let age = prompt("Enter your age : ");


// if (name.toLowerCase().includes('a' , 'z')){
//     alert("wellcome")
// }



const btn_h = document.querySelector(".btn-h");
const text  = document.querySelector(".txt")
const btn_s = document.querySelector(".btn-s")

btn_h.onclick = function () {
    text.style.display = "none";
}



btn_s.onclick = function () {
    text.style.display = "block";
}