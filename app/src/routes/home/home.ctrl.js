"use strict";


const output={
     home: (req, res)=>{
        res.render("home/index");
    },    
     login:  (req, res)=> {
        res.render("home/login");
     },
};

const users = {
    id : ["mrboo777", "박형제", "박열정"],
    psword : ["1234", "12345", "alstn718"],
};

const process = {
    login: (req, res) =>{
        const id = req.body.id,
            psword = req.body.psword;
        

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success:true,
                });
            }
        }


        return res.json({
            success:false,
            msg: "로그인에 실패",
        });
    },
};


 module.exports = {
    output,
    process,
 };