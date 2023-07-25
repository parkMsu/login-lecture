"use strict"

//DOM-> Document Object Model 
const id = document.querySelector("#id"),
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
function register(){
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };
    

    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res)=>{
        if(res.success){
            location.href ="/login";
        }else{
            // 상단에 메시지 띄움
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("회원가입 중 에러 발생"));
    });
}