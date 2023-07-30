const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-lecture-nub.ckoh9rvowzxu.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "alstn718",
    database: "login_lecture",
});

//연결 요청
db.connect();

module.exports = db;