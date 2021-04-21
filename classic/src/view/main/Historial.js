Ext.define('app.view.main.Historial', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainhistorial',

    width: 500,

    title: 'Historial',

    requires: [
        'app.store.Personnel'
    ],

    viewModel: {type: 'main'},

    store: {type: 'personnel'},

    columns: [{
        text: 'Número 1',
        dataIndex: 'num1'
    },
    {
        text: 'Número 2',
        dataIndex: 'num2'
    },{
        text: 'Operador',
        dataIndex: 'oper'
    },{
        text: 'Resultado',
        dataIndex: 'res'
    }
    ],

    buttons: [{
        text: 'Resetear', 
    }]
})