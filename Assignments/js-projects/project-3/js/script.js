let colorBox = document.querySelector('.box')
let btn = document.querySelector('.btn')
let r = 0;
let g = 0;
let b = 0;


console.log(r,g,b);

btn.onclick = ()=>{
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
   colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
}
