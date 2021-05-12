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
        StudentsPagingStore: {
            autoLoad: true,
            model: 'ClearApp.app.model.GridStudentsModel',
            pageSize: 2,
            proxy: {
                type: 'rest',
                reader: {
                    pageSize: 2,
                    rootProperty: 'data',
                    type: 'json',
                    totalProperty: 'TotalCount'
                },
                url: 'http://localhost/node/api/info'
            }
        },
        comboStore: {
            autoLoad: true,
            model: 'ClearApp.app.model.ComboModel',
            proxy: {
                type: 'ajax',
                url: 'http://localhost:8081/node/api/comboStore',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },
        newStore: {
            autoLoad: true,
            pageSize: 5,
            model: 'ClearApp.app.model.ComboModel',
            proxy: {
                type: 'ajax',
                //pageSize: 5,
                url: 'http://localhost:8081/node/api/newStore',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        }
    },
    formulas: {
        fieldName: {
            bind: {
                fieldId: '{fieldId}',
                newStore: '{newStore}'
            },
            get: function (data) {
                if (data.fieldId && data.newStore) {
                    var rec = data.newStore.getById(data.id);
                    if (!Ext.isEmpty(rec)) {
                        return rec.get('id')
                    }
                }
            }
        }
    }
});