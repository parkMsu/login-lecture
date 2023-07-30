"use strict"

const db = require("../config/db");

class UserStorage{
    // '#'는 public 변수를 private 변수로 숨겨주는 역할
    // static getUsers(isAll, ...fields){
        
    // }

    static getUserInfo(id){
        return new Promise((resolve, reject) =>{   
            const query = "SELECT * FROM users WHERE id = ?";
                                                    //id가 ?에 들어감
            db.query(query,[id], (err, data) =>{
                if(err) reject(`${err}`); //실패하면 reject로 에러 던짐 `${err}` 은 문자열
                resolve(data[0]);      //성공시 resolve로 데이터 던짐
                console.log(data);
            });
        })
    }
   
    static async save(userInfo){
        return new Promise((resolve, reject) =>{   
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
                                                    //id가 ?에 들어감
            db.query(
                query,
                [userInfo.id, userInfo.name, userInfo.psword],
                 (err) =>{
                    if(err) reject(`${err}`); //실패하면 reject로 에러
                    resolve({success : true});      //성공시 resolve로 오브젝트 던짐
            });
        })
    }
}

module.exports = UserStorage;