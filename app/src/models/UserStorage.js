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

    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;

        }, {});
        return newUsers;
    }

    static getUserInfo(id){
         return fs
         .readFile("./src/databases/users.json")
         .then((data) =>{
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
      
    }
   
    static save(userInfo){
        // const users= this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return{ success: true};
    }
}

module.exports = UserStorage;