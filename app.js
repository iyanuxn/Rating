/* A JavaScript function that is used to toggle the active class on the buttons. */
const btns = document.querySelectorAll(".button");
const submit = document.querySelector(".submit");
const main = document.querySelector(".main")
const success = document.querySelector(".success")
const num = document.getElementById("num")
num.textContent = "0"
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const current = e.currentTarget;
        btns.forEach(function(item){
            if (item !== btn) {
                item.classList.remove("active");
            }
        });
        current.classList.add("active")
        num.textContent = current.value
        console.log(current.value)
    })
})
submit.addEventListener("click",function(){
    if(num == ""){
        return(false)
    }
    else{
    main.style.display = "none"
    success.style.display = "flex"
    }
})