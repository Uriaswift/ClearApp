Ext.define('ClearApp.app.viewmodel.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid-viewmodel',
    requires: [
        'ClearApp.app.model.GridModel',
    ],
    data: {
        fieldId: 1,
    },
    stores: {
        gridStore: {
            autoLoad: true,
            pageSize: 2,
            model: 'ClearApp.app.model.GridModel',
            proxy: {
                type: 'ajax',
                url: 'https://retoolapi.dev/0TUXls/extjs',
                reader: {
                    type: 'json',
                    rootProperty: 'result'
                }
            },
        },
        newStore: {
            autoLoad: true,
            pageSize: 5,
            model: 'ClearApp.app.model.ComboModel',
            proxy: {
                type: 'ajax',
                url: 'http://localhost/node/api/newStore',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },
        treeStore: {
            type: 'tree',
            folderSort: true,
            model: 'ClearApp.app.model.TreeModel',
            sorters: 'name',
            root: 'root',
            proxy: {
                type: 'ajax',
                url: 'http://localhost/node/api/treeStore',
                reader: {
                    type: 'json',
                    rootProperty: 'result'
                }
            }
        }
    },
    formulas: {
        /*fieldName: {
            bind: {
                fieldId: '{fieldId}',
                windowStore: '{windowStore}'
            },
            get: function (data) {
                if (data.id && data.windowStore) {
                    var rec = data.windowStore.getById(data.id);
                    if (!Ext.isEmpty(rec)) {
                        return rec.get('id')
                    }
                }
            }
        }*/
    }
});