const express = require('express');
const router = express.Router();
const http = require('http');
var mysql = require('mysql');

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: '',
    insecureAuth: true,
    multipleStatements: true
});

router.get('/hello_world', (req, res, next) => {
    res.status(200).json("Hola Mundo desde NODE.JS");
});


module.exports = router;