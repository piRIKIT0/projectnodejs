import mysql from 'mysql';

const pool= mysql.createPool({
    "user": "root",
    "password": "02168910",
    "database": "api-yt",
    "host" : "localhost",
    "port" : 3306
})

export { pool };