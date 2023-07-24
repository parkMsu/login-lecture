"use strict"

class UserStorage{

    // '#'는 public 변수를 private 변수로 숨겨주는 역할
    static #users = {
    id : ["mrboo777", "박형제", "박열정"],
    psword : ["1234", "12345", "alstn718"],
    name: ["나일진", "나이진", "나삼진"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;

        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;