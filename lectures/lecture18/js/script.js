document.oncopy = function () {
    let site = document.title;
    let text = window.getSelection().toString();
    let url = window.location.href;
    let fullText = "This is from " + site + "\n\n" + text + "Read more : " + url;
    console.log(fullText);
    navigator.clipboard.writeText(fullText);
};



const copy_btns = document.querySelectorAll (".copy-box i");

copy_btns.forEach(function(el){
    el.onclick = function(){
        navigator.clipboard.writeText(el.previousElementSibling.textContent);
        el.nextElementSibling.classList.add("show");
        setTimeout(function(){
            el.nextElementSibling.classList.remove("show");
        },2000)
    };
});






