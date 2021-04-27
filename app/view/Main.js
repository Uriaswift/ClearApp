Ext.define('ClearApp.app.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'UserListPaging',
    scrollable: true,
    pageSize: 5,
    requires: [
        'ClearApp.app.model.GridModel',
        'ClearApp.app.store.GridStore'
    ],

    //controller: 'grid-controller',
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