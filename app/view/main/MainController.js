/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */

var num1, num2, op, res;

Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    valor1: function(e){
        num1 = e.value;
    },
    valor2: function(e){
        num2 = e.value;
    },

    operacion: function(e){
        op = e.value;
    },
    resultado: function(){
        if(op == "SUM"){
            res = num1 + num2;
        } else if(op == "RES"){
            res = num1 - num2;
        } else if(op == "MUL"){
            res = num1 * num2;
        }else{
            res = num1 / num2;
        }
        console.log(res);
    },
    storeUpdate: function(){
        this.getViewModel().set('resultado', res);
    }
});
