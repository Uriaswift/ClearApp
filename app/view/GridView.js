Ext.define('ClearApp.app.view.GridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'widget.grid-view',
    requires: [
        'ClearApp.app.store.GridStore',
        'ClearApp.app.controller.GridController'
    ],
    autoScroll: true,
    pageSize: 2,
    title: 'Users',
    columns: [
        {
            text: 'Name',
            dataIndex: 'Name',
            flex: 1,
            filter: 'string'
        },
        {
            text: 'Email',
            dataIndex: 'Email',
            renderer: 'mailTofunction',
            flex: 1
        },
        {
            text: 'Phone',
            dataIndex: 'Phone',
            renderer: 'renderrerFunction',
            flex: 1
        },
        {
            text: 'Phone2',
            dataIndex: 'Phone',
            renderer: 'stringReplacing',
            flex: 1
        },
        {
            text: 'Avatar',
            dataIndex: 'Avatar',
            renderer: 'rendererImage',
            flex: 1
        }
    ],
    plugins: [{
        ptype: 'gridfilters'
    }],
    filter: {type: 'string', dataIndex: 'Name'},
    listeners: {
        select: 'onItemSelected'
    },
    bbar: [{
        xtype: 'pagingtoolbar',
        bind:{
            store: '{gridStore}'
        },
        displayInfo: true,
        displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
        emptyMsg: "No records to display&nbsp;"
    }]
});