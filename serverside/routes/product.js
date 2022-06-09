const express = require('express');
const router = express.Router();
const {database} = require('../database/db');

/* GET ALL PRODUCTS */
router.post('/', function (req, res){ products.findAll({}).then((data) => {
    console.log(data);
 }).catch((err) => {
    console.log(err);
 })});
    
    



module.exports = router;