Ext.define('ClearApp.app.store.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'gridStore',
    autoLoad: {start: 0, limit: 5},
    pageSize: 5,
    remoteSort: true,
    requires: [
        'ClearApp.app.model.GridModel',
    ],
    type: 'ajax',
    model: 'ClearApp.app.model.GridModel',
    proxy: {
        type: 'rest',
        url: 'https://retoolapi.dev/0TUXls/extjs',
        reader: {
            type: 'json',
            totalProperty: 'TotalCount',
            rootProperty: 'Users'
        }
    }
});

