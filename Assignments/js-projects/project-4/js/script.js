const popup   = document.querySelector('.popup');
const btn = document.querySelector('button')
document.onclick = ()=>{
    setTimeout(() => {
    popup.classList.add("show");
    }, 3000);
}


btn.onclick = () => {
    popup.classList.remove("show");
};
