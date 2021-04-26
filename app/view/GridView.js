Ext.define('ClearApp.app.view.GridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridview',
    requires: [
        'ClearApp.app.store.GridStore'
    ],

    title: 'Users',

    store: {
        type: 'gridStore'
    },
    
    columns: [
        { text: 'Id', dataIndex: 'id', filter: 'number' },
        { text: 'Name', dataIndex: 'Name', flex: 1 },
        { text: 'Email', dataIndex: 'Email', renderer:function(v) {
                return '<a href="mailto:'+ v.toString() +'">'+ v.toString() +'</a>';
            }, flex: 1 },
        { text: 'Phone', dataIndex: 'Phone', renderer:function(v) {
                const str = v.toString();
                return '<p> ('+ str.slice(0, 5)+') '+ str.slice(6, 14) + ' </p>';
            }, flex: 1 },
        { text: 'Avatar', dataIndex: 'Avatar',
            renderer:function(v) {
                return '<img src="'+ v.toString() +'"/>';
            },
            flex: 1 }
    ],
    plugins: [{
        ptype: 'gridfilters'
    }],
    filter: {type: 'string', dataIndex: 'Name'},
    listeners: {
        select: 'onItemSelected'
    }
});