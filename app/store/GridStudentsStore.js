Ext.define('ClearApp.app.store.GridStudentsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.GridStudentsStore',
    storeId: 'GridStudentsStore',
    autoLoad: {start: 0, limit: 5},
    pageSize: 5,
    remoteSort: true,
    requires: [
        'ClearApp.app.model.GridStudentsModel',
    ],
    type: 'ajax',
    model: 'ClearApp.app.model.GridStudentsModel',
    proxy: {
        type: 'rest',
        url: 'https://www.extjs-tutorial.com/api/student',
        reader: {
            type: 'json',
            totalProperty: 'TotalCount',
            rootProperty: 'data'
        }
    }
});