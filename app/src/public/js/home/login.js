"use strict"

//DOM-> Document Object Model 
const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);
function login(){
    if(!id.value)
    return alert("아이디를 입력해주십시오.");
    if(!psword.value)
    return alert("비밀번호를 입력해주십시오.");

    const req = {
        id: id.value,
        psword: psword.value,
    };
    
    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res)=>{
        if(res.success){
            location.href ="/";
        }else{
            // 상단에 메시지 띄움
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("로그인 중 에러 발생"));
    });
}