const express = require('express');
const fs = require('fs');

const controller = {
    vista: function(req, res){
        let data = fs.readFileSync('historial.json', {encoding:'utf-8'});
        let dataJson = JSON.parse(data);
        res.send(dataJson);
    },
    historial: function(req, res){
        let data = fs.readFileSync('historial.json', {encoding:'utf-8'});
        let dataJson = JSON.parse(data);
        let historial={
            num1: req.body.num1,
            num2: req.body.num2,
            oper: req.body.oper,
            res: req.body.res
          };
        if(dataJson.length == 0){
            let historialJson = JSON.stringify(historial);
            fs.writeFileSync('historial.json', historialJson);
        } else {
            dataJson.push(historial);
            let historialJson = JSON.stringify(dataJson);
            fs.writeFileSync('historial.json', historialJson);
        }
    }
};


module.exports = controller;