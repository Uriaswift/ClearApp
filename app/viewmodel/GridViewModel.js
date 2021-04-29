Ext.define('ClearApp.app.viewmodel.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid-viewmodel',
    requires: [
        'ClearApp.app.model.GridModel',
    ],
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
        }

    }
});