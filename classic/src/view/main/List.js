/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.List', {
    extend: 'Ext.form.Panel',
    xtype: 'mainlist',

    /*requires: [
        'app.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },
    */
    title: 'Calculadora',

    width: 500,

    url: 'http://localhost:3000/historial',

    bodyPadding: 5,

    items: [{
        xtype: 'numberfield',
        fieldLabel: 'Número 1:',
        name: 'Number1',
        listeners: {
            change: 'valor1'
        }
    },
    {
        xtype: 'numberfield',
        fieldLabel: 'Número 2:',
        name: 'Number2',
        listeners: {
            change: 'valor2'
        }
    },
    {
        xtype: 'combobox',
        fieldLabel: 'Operaciones:',
        queryMode: 'local',
        displayField: 'name',
        valueField: 'abbr',

        store: [
            { abbr: 'SUM', name: 'Suma' },
            { abbr: 'RES', name: 'Resta' },
            { abbr: 'MUL', name: 'Multiplicación' },
            { abbr: 'DIV', name: 'División' }
        ],
        editable: false,

        listeners: {
            select: 'operacion'
        }
    },
    {
        xtype: 'label',
        bind: {
            html: 'Resultado: {resultado}'
        }
    }
],

    
    buttons: [{
        text: 'Calcular',
        listeners: {
            focus: 'resultado',
            click: 'storeUpdate'        
        },
        handler: function(btn){
            var data = this.up('form');
            console.log(data.getForm().getValues());
            data.submit();
        }
    }]
});
