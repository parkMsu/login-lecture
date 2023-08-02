// // // //서버의 중심파일
"use strict"; //이크마 스크립트의 문법을 준수하겠다. 명시

// const http = require("http");
// const app =http.createServer((req, res)=>{
//    // res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     //한글을 사용할거 라는 명령어.. html에서 사용한다. 우리가 express를 이용하는이유중 하나
//     //if도 귀찮다는데 난 좋음사실
//     if(req.url === '/'){
//         res.end("여기는 루트입니다.");
//     }
//     else if(req.url === "/login"){
//         res.end("여기는 로그인 화면입니다.");
//     }
//     else
//     res.end("막치지 말아줘..");
// });

// app.listen(3001, ()=>{
//     console.log("http로 가동된 서버입니다.");
// });

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");   //어떤 OS에서 개발하더라도 동일하게 환경변수 등록 가능
// const morgan = require("morgan");



const app =express();
dotenv.config();        //env에 자동적으로 접근할 수 있도록 등록해줌

// const accessLogStream = require("./src/config/logger");

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
                        //app.js위치 안에있는 src
app.use(express.static(__dirname+'/src/public'));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백들과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("dev"));
// app.use(morgan("common", {stream: accessLogStream }));
app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;

