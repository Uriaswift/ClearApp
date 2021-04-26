Ext.define('ClearApp.app.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'UserListPaging',
    requires: [
        'ClearApp.app.model.GridModel',
    ],

    //controller: 'grid-controller',
    viewModel: {
        type: 'grid-viewmodel'
    },
    items: [{
        xtype: 'grid-view',
        bind: {
            store: '{gridStore}'
        }
    }]
});