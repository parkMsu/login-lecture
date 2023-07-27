"use strict"


const fs = require("fs").promises;

class UserStorage{
    // '#'는 public 변수를 private 변수로 숨겨주는 역할
    static #getUserInfo(data ,id){
        const users = JSON.parse(data);    
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUsers(data,isAll, fields){
        // data는 버퍼데이터여서 parse 해준다
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;

        }, {});
        return newUsers;
    }
    static getUsers(isAll, ...fields){
        return fs
         .readFile("./src/databases/users.json")
         .then((data) =>{
            return this.#getUsers(data,isAll, fields);
        })
        .catch(console.error);
        
    }

    static getUserInfo(id){
         return fs
         .readFile("./src/databases/users.json")
         .then((data) =>{
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
      
    }
   
    static async save(userInfo){
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
           throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        //데이터 추가                               //문자열 형식으로 변경
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success: true};
    }
}

module.exports = UserStorage;