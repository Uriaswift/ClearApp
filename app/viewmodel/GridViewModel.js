Ext.define('ClearApp.app.viewmodel.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid-viewmodel',
    requires: [
        'ClearApp.app.model.GridModel',
    ],
    data: {
        test: 1,
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
            proxy:
                {
                    type: 'rest',
                    reader:
                        {
                            pageSize: 2,
                            rootProperty: 'data',
                            type: 'json',
                            totalProperty: 'TotalCount'
                        },
                    url: 'http://localhost:8081/api/info'
                }
        },
        ComboStore: {
            autoLoad: true,
            model: 'ClearApp.app.model.ComboModel',
            proxy:
                {
                    type: 'rest',
                    reader:
                        {
                            pageSize: 2,
                            rootProperty: 'data',
                            type: 'json',
                            totalProperty: 'TotalCount'
                        },
                    url: 'http://localhost:8081/api/info/'
                }
        }, RestStore: {
            autoLoad: true,
            model: 'ClearApp.app.model.ComboModel',
            proxy:
                {
                    type: 'rest',
                    reader:
                        {
                            rootProperty: 'data',
                            type: 'json',
                            totalProperty: 'TotalCount'
                        },
                    url: 'http://localhost:8081/api/info/'
                }
        }

    },
    formulas: {
        test2: {
            bind: {
                test: '{test}',
                comboStore: '{ComboStore}'
            },
            get: function (data) {
                if (data.test && data.comboStore) {
                    var rec = data.comboStore.getById(data.test);
                    if (!Ext.isEmpty(rec)){
                       return rec.get('name')
                    }
                }
            }
        }
    }
});