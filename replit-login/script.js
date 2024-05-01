let emailDiv = document.querySelector(".emailbox");
let emailInp = document.querySelector(".emailInp");
let passDiv = document.querySelector(".passwordbox");
let passInp = document.querySelector(".passInp");

let loginBtn = document.querySelector(".loginBtn");

let eye = document.getElementById("eye");
let eyecut = document.getElementById("eyecut");

emailInp.addEventListener("focus",() => {
    emailDiv.style.border = "2px solid #005CB8";
});
passInp.addEventListener("focus",() => {
    passDiv.style.border = "2px solid #005CB8";
});
emailInp.addEventListener("blur",() => {
    emailDiv.style.border = "none";
});
passInp.addEventListener("blur",() => {
    passDiv.style.border = "none";
});

//for loginBUTTON color change
emailInp.addEventListener("input",() => {
    if(passInp.value == ''){
       
    }
    else{

        loginBtn.style.backgroundColor = "#FA4B4B";
        loginBtn.addEventListener("mouseover",() => {
            loginBtn.style.backgroundColor = "#f5b597";
        })
        loginBtn.addEventListener("mouseout",() => {
            loginBtn.style.backgroundColor = "#FA4B4B";
        })
    }
});
passInp.addEventListener("input",() => {
    if(emailInp.value == ''){
        
    }
    else{

        loginBtn.style.backgroundColor = "#FA4B4B";
        loginBtn.addEventListener("mouseover",() => {
            loginBtn.style.backgroundColor = "#f5b597";
        })
        loginBtn.addEventListener("mouseout",() => {
            loginBtn.style.backgroundColor = "#FA4B4B";
        })
    }
});

setInterval(() => {
    if(emailInp.value == '' || passInp.value == '' ){
        loginBtn.style.backgroundColor = "#f5b597";

    }
}, 100);
window.addEventListener("load",() => {
    emailInp.value = ""; 
    passInp.value = "";
})

//handling password eye icon
eye.addEventListener("click",() => {
    eye.style.display = "none";
    eyecut.style.display = "block";
    passInp.removeAttribute("type");
    passInp.setAttribute("type","text");

    
})
eyecut.addEventListener("click",() =>{
    eye.style.display = "block";
    eyecut.style.display = "none";
    passInp.removeAttribute("type");
    passInp.setAttribute("type","password");
})