Ext.define('ClearApp.app.view.TreeView', {
    extend: 'Ext.tree.Panel',
    xtype: 'widget.tree-grid-view',
    autoScroll: true,
    title: 'Users',
    rootVisible: false,
    columns: [
        {
            xtype: 'treecolumn',
            text: 'Name',
            dataIndex: 'name',
            minWidth: 200,
            flex: 1
        }, {
            text: 'Surname',
            dataIndex: 'surname',
            minWidth: 200,
            flex: 1
        }, {
            text: 'Phone',
            dataIndex: 'phone',
            minWidth: 200,
            flex: 1
        }]
});