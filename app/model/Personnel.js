Ext.define('app.model.Personnel', {
    extend: 'app.model.Base',

    fields: [
        { name:'num1', type: 'int'},
        { name:'num2', type: 'int'}, 
        {name:'oper', type:'string'},
        { name:'res', type: 'int'}
    ]
});
