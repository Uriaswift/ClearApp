Ext.define('ClearApp.app.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'UserListPaging',
    scrollable: true,
    requires: [
        'ClearApp.app.model.GridModel',
        'ClearApp.app.store.GridStore',
        'ClearApp.app.view.GridView'
    ],

    controller: 'grid-controller',
    viewModel: {
        type: 'grid-viewmodel'
    },
    items: [{
        xtype: 'grid-view',
        scrollable: true,
        bind: {
            store: '{gridStore}'
        }
    }]
});