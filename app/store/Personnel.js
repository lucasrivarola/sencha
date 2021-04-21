Ext.define('app.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'app.model.Personnel',

    viewModel: 'main',

    listeners: {
        update: 'storeUpdate'
    },
    
    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/historial'
    },

    autoLoad: true
});
