let spans = document.querySelectorAll(".bullets > span");
let btn = document.getElementById("btn");
let box = document.querySelector(".box");
let rate = "";

spans.forEach(s => {
    s.addEventListener("click" , function(e){
        spans.forEach(sp =>{
            sp.classList.remove("active");
        });
        e.target.classList.add("active");
        rate = e.target.textContent;
    });
});

btn.addEventListener("click" , function(){
    let ele = document.querySelectorAll(".box *");
    ele.forEach(e => {
        e.classList.toggle("hide");
    });
    let msg = document.querySelector(".msg");
    msg.textContent = `You selected ${rate || 0} out of 5`;
})
