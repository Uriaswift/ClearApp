Ext.define('ClearApp.app.viewmodel.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid-viewmodel',
    requires: [
        'ClearApp.app.model.GridModel',
    ],
    stores: {
        gridStore: {
            model: 'ClearApp.app.model.GridModel',
            proxy: {
                type: 'ajax',
                url: 'https://retoolapi.dev/0TUXls/extjs',
                reader: {
                    type: 'json',
                    rootProperty: 'result'
                }
            },
            autoLoad: true
        }
    }
});