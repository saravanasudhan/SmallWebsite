document.addEventListener("DOMContentLoaded",function(){
    const button=document.getElementById("button");
    const visible=document.getElementById("visible");
    button.addEventListener("click",function(){
        visible.classList.toggle("hidden");
    });
});