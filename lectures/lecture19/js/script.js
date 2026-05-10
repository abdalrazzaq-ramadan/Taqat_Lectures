// let link_a = document.querySelector('.link-1');
// let link_span = document.querySelector('.link-2')

// link_a.onclick = (e) => e.preventDefault ();
 
// link_span.onclick = (e) => window.open('https://www.google.com');



let top_btn = document .querySelector('.top');

window.onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > document.body.scrollHeight / 2){
        top_btn.classList.add("rotate");
    }else{
        top_btn.classList.remove("rotate");
    }
};


top_btn.onclick = ()=>{
        if (window.scrollY > document.body.scrollHeight / 2){
        
        window.scrollTo({
            top :0,
            behavior: "smooth",
        })
    }else{
        window.scrollTo({
            top :document.body.scrollHeight,
            behavior: "smooth",
        })
    }
}

