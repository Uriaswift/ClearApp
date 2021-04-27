Ext.define('ClearApp.app.view.GridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'widget.grid-view',
    requires: [
        'ClearApp.app.store.GridStore',
        'ClearApp.app.controller.GridController'
    ],
    autoScroll: true,
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
            renderer: function (v) {
                return '<a href="mailto:' + v.toString() + '">' + v.toString() + '</a>';
            },
            flex: 1
        },
        {
            text: 'Phone',
            dataIndex: 'Phone',
            renderer: function (v) {
                const str = v.toString();
                //return '<p> ('+ str.slice(0, 5)+') '+ str.slice(6, 14) + ' </p>';
                return str;
            },
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
            renderer: function (v) {
                return '<img src="' + v.toString() + '"/>';
            },
            flex: 1
        },
        {
            text: 'TruePhone', dataIndex: 'Phone', renderer: function (v) {
                return 'stringReplacing';
            },
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
        /*bind:{
            store: 'ClearApp.app.store.GridStore'
        },*/
        displayInfo: true,
        displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
        emptyMsg: "No records to display&nbsp;"
    }]
});