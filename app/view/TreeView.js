Ext.define('ClearApp.app.view.TreeView', {
    extend: 'Ext.grid.Panel',
    xtype: 'widget.grid-view',
    autoScroll: true,
    title: 'Users',
    columns: [
        {
            xtype: 'treecolumn',
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
        }, {
            text: 'Surname',
            dataIndex: 'surname'
        }, {
            text: 'Phone',
            dataIndex: 'phone'
        }]
});