Ext.define('ClearApp.app.view.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'UserListPaging',

    title: 'Users',

    viewModel: {
        type: 'gridviewmodel'
    },
    selType: 'rowmodel',
    selModel: {
        mode: 'SINGLE'
    },
    viewConfig: {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: 'gridStore'
    },
    items: [{
        title: 'Users',
        scrollable: true,
        items: [{
            xtype: 'gridview'
        }],
    }],

    bbar: [{
        xtype: 'pagingtoolbar',
        bind: {
            store: '{StudentListPagingStore}'
        },
        displayInfo: true,
        displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
        emptyMsg: "No records to display&nbsp;"
    }]

});